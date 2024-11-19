import { DataTypes } from "sequelize";
import sequelize from "../../database/connection.js";
const Brand = sequelize.define("Brand", {
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
export default Brand;
