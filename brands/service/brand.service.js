import Brand from "../schemas/brand.schema.js";
export const brandService = {
  async addBrand(reqObject) {
    try {
      console.log("brand");

      const isBrandPresent = await Brand.findOne({
        where: { brand_name: reqObject?.brand_name },
      });

      if (isBrandPresent) {
        return { data: "Brand already exists", status: 302 };
      }
      const data = await Brand.create({
        brand_name: reqObject?.brand_name,
      });
      if (data) {
        return { data: "Brand added sccessflly", status: 201 };
      }
      return { data: "Something went wrong", status: 500 };
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async getBrand() {
    try {
      const result = await Brand.findAll({ where: { isDeleted: false } });
      if (result && result.length > 0) {
        return { data: result, status: 200 };
      } else {
        return { data: "Data not found", status: 500 };
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async updateBrand() {
    try {
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
};
