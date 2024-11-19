import Category from "../schemas/category.schema.js";
export const categoryService = {
  async addCategory(reqObject) {
    try {
      const isCategoryPresent = await Category.findOne({
        where: { category_name: reqObject?.category_name },
      });
      if (isCategoryPresent) {
        return { data: "Category already exist", status: 302 };
      } else {
        const data = await Category.create({
          category_name: reqObject.category_name,
          // brand_id: reqObject.brand_id,
        });
        if (data) {
          return { data: "Category added successfully", status: 201 };
        } else {
          return { data: "Something went wrong", status: 500 };
        }
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async getCategory() {
    try {
      const result = await Category.findAll({ where: { isDeleted: false } });
      if (result?.length > 0) {
        return { data: result, status: 200 };
      }
      return { data: "something went wrong", status: 500 };
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
};
