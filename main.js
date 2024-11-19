import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
import sequelize from "./database/connection.js";
import userRoute from "./users/routes/user.routes.js";
import brandRoute from "./brands/routes/brand.route.js";
import categoryRoute from "./category/routes/category.route.js";
import productRoute from "./products/routes/product.route.js";
let port = process.env.PORT;
app.use("/user", userRoute);
app.use("/brand", brandRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
