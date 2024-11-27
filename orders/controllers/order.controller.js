import { orderService } from "../services/order.service.js";
export const orderController = {
  async createOrder(req, res, next) {
    const result = await orderService.createOrder(req.body);
    if (result.status == 201) {
      return res.status(200).json({ data: result.data, status: true });
    }
    return res.status(500).json({ data: result.data, status: false });
  },
  async getOrder() {
    const result = await orderService.getOrder();
    if (result.status == 200) {
      return res.status(200).json({ data: result.data, status: true });
    }
    return res.status(500).json({ data: result.data, status: false });
  },
  async updateOrder(req, res, next) {
    let id = req.params.id;

    const result = await orderService.updateOrder(id, req.body);

    if (result.status == 200) {
      return res.status(200).json({ data: result.data, status: true });
    } else {
      return res.status(500).json({ data: result.data, status: false });
    }
  },
};
