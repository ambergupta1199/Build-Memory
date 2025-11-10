import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

//It’s used to define routes (endpoints) separately from your main app.js file
const router = express.Router();
//instead of writting each route definition here, we are seperately creating functions in controllers
router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
//This is different from PUT, which is typically used to replace an entire resource. For example, if you only want to update a post's title but not its message, PATCH is the correct method.
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
