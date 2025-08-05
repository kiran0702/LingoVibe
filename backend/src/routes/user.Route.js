import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendRequests,
  deleteFriendRequest
} from "../controllers/user.controller.js";

const router = express.Router();

// Protect all routes
router.use(protectRoute);

// Recommended users
router.get("/", getRecommendedUsers);

// Get my friends
router.get("/friends", getMyFriends);

// Send friend request
router.post("/friend-request/:id",sendFriendRequest);

// Accept friend request (should be a PUT/PATCH, not GET)
router.put("/friend-request/:id/accept", acceptFriendRequest);

// Decline/Remove friend request (should be a DELETE, not GET)
router.delete("/friend-request/:id", deleteFriendRequest);

// Get all received friend requests
router.get("/friend-requests", getFriendRequests);

// Get all outgoing friend requests
router.get("/outgoing-friend-requests", getOutgoingFriendRequests);

export default router;
