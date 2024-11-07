import { Router } from "express";
import { authorMiddleware } from "../middleware/author.middleware.js";
import { createSchema } from "../schema/author.schema.js";
import {
  createAuthorCon,
  updateAuthorByIdCon,
} from "../controllers/author.controllers.js";
import { createCategoryMidd } from "../middleware/category.middleware.js";
import { updateCategoryByIdCon } from "../controllers/category.controllers.js";
import { loginAdmin, registerAdmin} from "../middleware/admin.middleware.js";

export const adminRouter = Router();

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);

adminRouter.post("/author", authorMiddleware(createSchema), createAuthorCon);
adminRouter.post(
  "/category",
  createCategoryMidd(createSchema),
  createAuthorCon
);

adminRouter.put("/author/:authorId", updateAuthorByIdCon);
adminRouter.put("/category/:categoryId", updateCategoryByIdCon);
