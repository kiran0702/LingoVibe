// Fixed API functions
import { axiosInstance } from './axios';

export const signup = async (SignupData) => {
  const response = await axiosInstance.post('/auth/signup', SignupData);
  return response.data;
}

export const login = async (loginData) => {
  const response = await axiosInstance.post('/auth/login', loginData);
  return response.data;
}

export const logout = async () => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data;
}

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me")
    return res.data;
  } catch (error) {
    console.error(error);
    return null
  }
}

export const completeOnbaording = async (userData) => {
  const res = await axiosInstance.post("/auth/onboarding", userData);
  return res.data;
}

export async function getUserFriends() {
  const response = await axiosInstance.get("/users/friends");
  return response.data; // ✅ This is correct - backend returns friends array directly
}

export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/users");
  return response.data.data; // ✅ This is correct
}

// 🔧 FIXED: Return the actual data array
export async function getOutgoingFriendReqs() {
  const response = await axiosInstance.get("/users/outgoing-friend-requests");
  return response.data.data; // ✅ Changed from response.data to response.data.data
}

export async function sendFriendRequest(userId) {
  const response = await axiosInstance.post(`/users/friend-request/${userId}`);
  return response.data;
}

export async function getFriendRequests() {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data.data; 
}

export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
  return response.data;
}

export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}