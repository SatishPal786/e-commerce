import express from "express";
import { userService } from "../services/user.service.js";

export const userController = {
  async createUser(req, res, next) {
    const result = await userService.createUser(req.body);

    if (result?.status == 201) {
      return res
        .status(201)
        .json({ data: "user created successfully", status: true });
    } else {
      return res.status(500).json({ data: result?.data, status: false });
    }
  },
  async loginUser(req, res, next) {
    const result = await userService.loginUser(req.body);
    if (result?.status == 200) {
      return res.status(200).json({ data: result?.data, status: true });
    } else {
      return res.status(500).json({ data: result?.data, status: false });
    }
  },
  async updateUser(req, res, next) {
    let id = req.params.id;

    console.log(id, "iddd");

    const result = await userService.updateuser(id, req.body);
    console.log(result, "rsult");

    if (result.status == 200) {
      return res.status(200).json({ data: result.data, status: true });
    } else {
      return res.status(500).json({ data: result.data, status: false });
    }
  },
};
