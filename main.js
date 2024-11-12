import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
import sequelize from "./database/connection.js";
import userRoute from "./users/routes/user.routes.js";

let port = process.env.PORT;
app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
