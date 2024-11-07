import express from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();
const secretKey = process.env.SECRET_KEY;

const app = express();
app.use(express.json());

const admins = new Map();

export const registerAdmin = (req, res, next) => {
  try {
    const { email } = req.body;
    const admin = admins.has(email);
    if (!admin) {
      admins.set(email, req.body);
      return res.status(201).send("Created");
    }
    return res.status(409).send("Admin already exists!");
  } catch (error) {
    next(error);
  }
};

export const loginAdmin = (req, res, next) => {
  try {
    const { email } = req.body;
    const admin = admins.has(email);
    if (!admin) {
      return res.status(404).send("Not fouond!");
    }
    const payload = {
      email,
    };
    const token = jwt.sign(payload, secretKey);

    res.send({
      token,
    });
  } catch (error) {
    next(error);
  }
};

// app.get("/auth/me", (req, res) => {
//   try {
//     const token = req.headers?.authorization.split(" ")[1];
//     jwt.verify(token, "qwer12345", (err, decode) => {
//       if (err) {
//         return res.status(401).send("un authorization");
//       }
//       const admin = admins.get(decode?.email);
//       console.log(admin);

//       res.send(admin);
//     });
//   } catch (error) {}
// });

// app.listen(3000, () => {
//   console.log("3000");
// });
