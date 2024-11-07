import {
  createCategoryService,
  deleteByIdCategoryService,
  getAllCategoryService,
  getByIdCategoryService,
  updateByIdCategoryService,
} from "../services/category.service.js";

export const getAllCategorysCon = async (req, res, next) => {
  try {
    const allData = await getAllCategoryService();

    res.send(allData);
  } catch (error) {
    next(error);
  }
};

export const getByIdCategoryCon = async (req, res, next) => {
  try {
    const categoryId = req.params.CategoryId;
    const oneCategoryData = await getByIdCategoryService(categoryId);

    if (oneCategoryData) return res.send(oneCategoryData);

    res.status(404).send("Not found!");
  } catch (error) {
    next(error);
  }
};

export const createCategoryCon = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.params.categoryId, req.body);

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryByIdCon = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;

    const result = await updateByIdCategoryService(categoryId, req.body);

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteByIdCategoryCon = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;

    const result = await deleteByIdCategoryService(categoryId);

    res.send(result);
  } catch (error) {
    next(error);
  }
};
