import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useAuthUser from '../hooks/useAuthUser';
import { useQuery } from '@tanstack/react-query';
import { getStreamToken } from '../lib/api';
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window
} from "stream-chat-react";
import { StreamChat } from 'stream-chat';
import toast from "react-hot-toast";
import ChatLoader from '../components/ChatLoader';
import CallButton from '../components/CallButton';
const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

const ChatPage = () => {
  const { id: targetUserId } = useParams();
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);

  const { authUser } = useAuthUser();

  const { data: tokenData, isLoading: isTokenLoading, isError: isTokenError } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser
  });

  useEffect(() => {
    let client;
    let isMounted = true;

    const initChat = async () => {
      if (!authUser || isTokenLoading || isTokenError || !tokenData?.token) return;

      if (!STREAM_API_KEY) {
        toast.error("Chat is not configured. Missing Stream API key.");
        setLoading(false);
        return;
      }

      try {
        client = StreamChat.getInstance(STREAM_API_KEY);
        await client.connectUser(
          {
            id: authUser._id,
            name: authUser.fullName,
            image: authUser.profilePic
          },
          tokenData.token
        );
        const channelId = [authUser._id, targetUserId].sort().join("-");
        const currChannel = client.channel("messaging", channelId, {
          members: [authUser._id, targetUserId]
        });
        await currChannel.watch();
        if (isMounted) {
          setChatClient(client);
          setChannel(currChannel);
        }
      } catch (error) {
        toast.error("Could not connect to the chat");
        console.error("Error initializing the stream chat client:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    initChat();

    return () => {
      isMounted = false;
      if (client) client.disconnectUser();
    };
  }, [tokenData, authUser, targetUserId, isTokenLoading, isTokenError]);

  const handleVideoCall = () => {
  if (channel) {
    const callUrl = `${window.location.origin}/call/${channel.id}`;

    channel.sendMessage({
      text: `I've started a video call, Join me here : ${callUrl}`
    });
    toast.success("Video Call link sent successfully!");
  }
};


  if (loading || isTokenLoading) return <ChatLoader />;

  if (isTokenError || !tokenData?.token) {
    return (
      <div className="flex h-[93vh] items-center justify-center px-6 text-center">
        <p>Unable to connect to chat. Please refresh and try again.</p>
      </div>
    );
  }

  if (!chatClient || !channel) return <ChatLoader />;

  return (
    <div className='h-[93vh]'>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <div className='w-full relative'>
            <CallButton handleVideoCall = {handleVideoCall}/>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput focus />
            </Window>
          </div>
          <Thread/>
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatPage;
