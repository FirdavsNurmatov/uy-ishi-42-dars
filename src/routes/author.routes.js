import { Router } from "express";
import { createSchema } from "../schema/author.schema.js";
import { authorMiddleware } from "../middleware/author.middleware.js";
import {
  createAuthorCon,
  deleteByIdAuthorCon,
  getAllAuthorsCon,
  getByIdAuthorCon,
  updateAuthorByIdCon,
} from "../controllers/author.controllers.js";

export const authorRouter = Router();

authorRouter.get("/", getAllAuthorsCon);
authorRouter.get("/:authorId", getByIdAuthorCon);
authorRouter.post("/", authorMiddleware(createSchema), createAuthorCon);
authorRouter.put("/:authorId", updateAuthorByIdCon);
authorRouter.delete("/:authorId", deleteByIdAuthorCon);
