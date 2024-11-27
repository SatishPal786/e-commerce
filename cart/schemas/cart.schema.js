import { DataTypes } from "sequelize";
import sequelize from "../../database/connection.js";

const Cart = sequelize.define("Cart", {});
export default Cart;
