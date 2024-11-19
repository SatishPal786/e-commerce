import { productService } from "../service/product.service.js";
export const productController = {
  async addProduct(req, res, next) {
    const result = await productService.addProduct(req.body);

    if (result.status == 201) {
      return res
        .status(201)
        .json({ data: "product added successfully", status: true });
    }
    if (result.status == 302) {
      return res.status(302).json({ data: result?.data, status: true });
    } else {
      return res.status(500).json({ data: result?.data, status: false });
    }
  },
  async getProduct(req, res, next) {
    const result = await productService.getProduct();
    if (result.status == 200) {
      return res.status(200).json({ data: result.data, status: true });
    } else {
      return res.status(500).json({ data: result.data, status: false });
    }
  },
};
