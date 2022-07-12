import "dotenv/config";
import express from "express";
import { appRouter } from "./routes/routes";

const app = express();

app.use(appRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}`)
);
