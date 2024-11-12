import { where } from "sequelize";
import User from "../schemas/user.schema.js";
import bcrypt from "bcryptjs";

export const userService = {
  async createUser(data) {
    try {
      let email = data?.email;
      let password = data?.password;
      let saltKey = await bcrypt.genSalt(10);
      let encryptedPassword = await bcrypt.hash(password, saltKey);
      const userFound = await User.findOne({ where: { email: data?.email } });
      if (userFound) {
        return { data: "email already exist", status: 302 };
      } else {
        const user = await User.create({
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: email,
          password: encryptedPassword,
          phone: data?.phone,
          address: data?.address,
          city: data?.city,
          role: data?.role,
          isVerified: data?.isVerified,
        });
        return { data: "user created successfully", status: 201 };
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async loginUser(data) {
    try {
      let email = data?.email;
      let password = data?.password;
      if (email) {
        const userFound = await User.findOne({ where: { email: email } });
        if (userFound) {
          let isMatchedPassword = await bcrypt.compare(
            password,
            userFound.password
          );
          if (isMatchedPassword) {
            return { data: userFound, status: 200 };
          } else {
            return { data: "Invalid details", status: 400 };
          }
        } else {
          return { data: "Invalid details", status: 400 };
        }
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
  async updateuser(id, data) {
    try {
      const userFound = await User.findOne({ where: { id: id } });
      console.log(userFound, "userFound");

      if (userFound) {
        const updatedUser = await User.update(data, {
          where: { id: id },
        });
        if (updatedUser) {
          return { data: "Update successfully", status: 200 };
        } else {
          return { data: "Something went wrong", status: 500 };
        }
      }
    } catch (error) {
      return { data: error, status: 500 };
    }
  },
};
