import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => 
  console.log('Listening on: http://localhost:${PORT}');

const handleHome = (req, res) => res.send('Hello far from ass');

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

// 미들웨어는 다양하게 사용될 수 있다. ex) 로그인체크, 로그 등
app.use(betweenHome);

// ... 원하는 만큼 미들 웨어를 넣는 것이 가능 //
// Route 처리를 하기 전에 넣는 것이 좋지 않을까?

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
