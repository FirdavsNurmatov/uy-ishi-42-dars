import { Author } from "../models/author.model.js";

export const getAllAuthorsService = async () => {
  try {
    return await Author.find().select({ password: 0 });
  } catch (error) {
    return error;
  }
};

export const getByIdAuthorService = async (authorId) => {
  try {
    return await Author.findById(authorId).select({ password: 0 });
  } catch (error) {
    return error;
  }
};

export const createAuthorService = async (authorData) => {
  try {
    const { fullname, email, password } = authorData;

    const userExists = await Author.findOne({ email });
    if (userExists) {
      return "Author already has!";
    }

    const author = new Author({
      fullname: fullname,
      email: email,
      password: password,
    });
    await author.save();

    return "Created";
  } catch (error) {
    return error;
  }
};

export const updateByIdAuthorService = async (authorId, authorData) => {
  try {
    const { fullname, email, password } = authorData;

    const oldData = await Author.findById(authorId);

    await Author.updateOne(
      { _id: authorId },
      {
        fullname: fullname || oldData.fullname,
        email: email || oldData.email,
        password: password || oldData.password,
      }
    );

    return "Updated";
  } catch (error) {
    return error;
  }
};

export const deleteByIdAuthorService = async (authorId) => {
  try {
    await Author.deleteOne({_id: authorId})

    return "Deleted"
  } catch (error) {
    next(error)
  }
}