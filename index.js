import express from "express";

const app = express();

app.get("/", (req, res, next) => {
 res.json("Hello World!! -  Deep & Sneha");
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
