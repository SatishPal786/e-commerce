import { categoryService } from "../services/category.service.js";
export const categoryController = {
  async addCategory(req, res, next) {
    const result = await categoryService.addCategory(req.body);
    if (result.status == 201) {
      return res.status(200).json({ data: result.data, status: true });
    } else if (result.status == 302) {
      return res.status(302).json({ data: result.data, status: false });
    } else {
      return res.status(500).json({ data: result.data, status: 500 });
    }
  },
  async getCategory(req, res, next) {
    const result = await categoryService.getCategory();
    if (result.status == 200) {
      return res.status(200).json({ data: result.data, status: true });
    }
    return res.status(500).json({ data: result.data, status: false });
  },
};
