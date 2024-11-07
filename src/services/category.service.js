import { Author } from "../models/author.model.js";
import { Category } from "../models/category.model.js";

export const getAllCategoryService = async () => {
  try {
    return await Category.find();
  } catch (error) {
    return error;
  }
};

export const getByIdCategoryService = async (categoryId) => {
  try {
    return await Category.findById(categoryId);
  } catch (error) {
    return error;
  }
};

export const createCategoryService = async (commentaryId, categoryData) => {
  try {
    const { authorId, commentary } = categoryData;

    const author = await Author.findById(authorId)
    if(!author){
        return "No author like this id!"
    }

    // const commentaryExists = await Category.findOne({ commentaryId });
    // if (commentaryExists) {
    //   return "Category already has!";
    // }

    const category = new Category({
      authorId: authorId,
      commentary: commentary,
    });
    await category.save();

    return "Created";
  } catch (error) {
    return error;
  }
};

export const updateByIdCategoryService = async (categoryId, categoryData) => {
  try {
    const { authorId, commentary } = categoryData;

    const author = await Author.findById(authorId)
    if(!author){
        return "No author like this id!"
    }
    const oldData = await Category.findById(categoryId);

    await Category.updateOne(
      { _id: categoryId },
      {
        authorId: authorId || oldData.authorId,
        commentary: commentary || oldData.commentary,
      }
    );

    return "Updated";
  } catch (error) {
    return error;
  }
};

export const deleteByIdCategoryService = async (categoryId) => {
  try {
    await Category.deleteOne({ _id: categoryId });

    return "Deleted";
  } catch (error) {
    next(error);
  }
};
