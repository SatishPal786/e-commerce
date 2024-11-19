import Product from "../schemas/product.schema.js";
export const productService = {
  async addProduct(reqObject) {
    try {
      const isProductPresent = await Product.findOne({
        where: { product_name: reqObject?.product_name },
      });
      if (isProductPresent) {
        return { data: "Product already exist", status: 302 };
      } else {
        const data = await Product.create({
          product_name: reqObject?.product_name,
          brand_id: reqObject?.brand_id,
          category_id: reqObject?.category_id,
          product_price: reqObject?.product_price,
          description: reqObject?.description,
          stock: reqObject?.stock,
        });
        if (data) {
          return { data: "Product added successfully", status: 201 };
        } else {
          return { data: "Something went wrong", status: 500 };
        }
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async getProduct() {
    try {
      const result = await Product.findAll({ where: { isDeleted: false } });
      if (result?.length > 0) {
        return { data: result, status: 200 };
      }
      return { data: "something went wrong", status: 500 };
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
};
