import { DataTypes } from "sequelize";
import sequelize from "../../database/connection.js";
import Brand from "../../brands/schemas/brand.schema.js";
import Category from "../../category/schemas/category.schema.js";
const Product = sequelize.define("Product", {
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  stock: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
export default Product;
