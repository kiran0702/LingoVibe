import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
dotenv.config({ path: path.resolve(currentDirectory, "../../.env") });

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.log("Stream API key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.log("Error creating stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    //ensure the userId is a string
    const userIdstr = String(userId);
    return streamClient.createToken(userIdstr);
  } catch (error) {
    console.log("Error generating stream token:", error);
  }
};
