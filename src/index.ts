import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT ?? "3000";

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send(`Express + Typescript Server`);
});

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
