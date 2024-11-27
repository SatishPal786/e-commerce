import express from "express";
import Order from "../schemas/order.schema.js";
export const orderService = {
  async createOrder(reqObject) {
    try {
      const data = await Order.create({
        user_id: reqObject?.user_id,
      });
      if (data) {
        return { data: "Order added successfully", status: 201 };
      } else {
        return { data: "Something went wrong", status: 500 };
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async getOrder() {
    try {
      const result = await Order.findAll({ where: { isDeleted: false } });
      if (data) {
        return { data: result, status: 201 };
      } else {
        return { data: "Something went wrong", status: 500 };
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async updateOrder(id, data) {
    try {
      const dataFound = await Order.findOne({ where: { id: id } });
      if (dataFound) {
        const result = await Order.update(data, { where: { id: id } });
        if (result) {
          return { data: "Updated successfuully", status: 200 };
        }
      }
      return { data: "Data not found", status: 500 };
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
};
