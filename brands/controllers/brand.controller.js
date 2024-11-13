import { brandService } from "../service/brand.service.js";
export const brandController = {
  async addBrand(req, res, next) {
    const result = await brandService.addBrand(req.body);
    if (result.status == 201) {
      return res.status(200).json({ data: result.data, status: true });
    } else if (result.status == 302) {
      return res.status(302).json({ data: result.data, status: false });
    } else {
      return res.status(500).json({ data: result.data, status: false });
    }
  },
  async getBrand(req, res, next) {
    const result = await brandService.getBrand();
    if (result.status == 200) {
      return res.status(200).json({ data: result.data, status: true });
    } else {
      return res.status(500).json({ data: result.data, status: false });
    }
  },
};
