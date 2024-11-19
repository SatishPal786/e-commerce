import { DataTypes } from "sequelize";
import sequelize from "../../database/connection.js";
import Brand from "../../brands/schemas/brand.schema.js";
const Category = sequelize.define("Category", {
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  //   brand_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: Brand,
  //       key: "id",
  //     },
  //     onDelete: "CASCADE",
  //     onUpdate: "CASCADE",
  //   },
});
export default Category;
