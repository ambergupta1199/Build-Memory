import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// By default, browsers block requests made by JavaScript from one origin to another (for security reasons).

// Example:
// Your React frontend runs on: http://localhost:3000
// Your Express backend API runs on: http://localhost:5000

// If your frontend tries:
// fetch("http://localhost:5000/posts")

// The browser will block it and show an error like:
// Access to fetch at 'http://localhost:5000/posts' from origin 'http://localhost:3000' has been blocked by CORS policy.

// ✅ The solution — enable CORS
// CORS lets your server tell the browser:
// “Hey, it’s okay for that other origin (like your frontend) to access my API.”

app.use(cors());
//useNewUrlParser these 2 are not imortant but if we not add it it shows warning
mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {});
app.use("/posts", postRoutes); //adding a prefix /posts by default it will run with this , not with '/' this
app.get("/", (req, res) => {
  res.send("Hello To Memories API");
});

app.listen(port, () => console.log(`Server running on port : ${port}`));

mongoose.set("useFindAndModify", false);
