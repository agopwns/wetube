import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet()); // 보안을 위한 설정. 공식 문서 권장.
app.set("view engine", "pug"); // 뷰 엔진 설정.

// 컨트롤러, 루트는 확인하지 않고 파일만 확인
app.use("/uploads", express.static("uploads")); 
app.use(cookieParser()); // 세션.
app.use(bodyParser.json()); // json 사용하기 위함.
app.use(bodyParser.urlencoded({extended: true})); // 정보.
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;