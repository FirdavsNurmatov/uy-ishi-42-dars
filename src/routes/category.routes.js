import { Router } from "express";
import {
  createCategoryCon,
  deleteByIdCategoryCon,
  getAllCategorysCon,
  getByIdCategoryCon,
  updateCategoryByIdCon,
} from "../controllers/category.controllers.js";
import { createCategoryMidd } from "../middleware/category.middleware.js";
import { createSchema } from "../schema/category.schema.js";

export const categoryRouter = Router();

categoryRouter.get("/", getAllCategorysCon);
categoryRouter.get("/:categoryId", getByIdCategoryCon);
categoryRouter.post("/", createCategoryMidd(createSchema), createCategoryCon);
categoryRouter.put("/:categoryId", updateCategoryByIdCon);
categoryRouter.delete("/:categoryId", deleteByIdCategoryCon);
