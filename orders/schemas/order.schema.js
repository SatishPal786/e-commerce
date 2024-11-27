import { DataTypes } from "sequelize";
import sequelize from "../../database/connection.js";
const Order = sequelize.define("Order", {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  status: {
    type: DataTypes.ENUM("Pending", "Ordered", "Cancelled", "Completed"),
    defaultValue: "Pending",
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
export default Order;
