import {
  createAuthorService,
  deleteByIdAuthorService,
  getAllAuthorsService,
  getByIdAuthorService,
  updateByIdAuthorService,
} from "../services/author.service.js";

export const getAllAuthorsCon = async (req, res, next) => {
  try {
    const allData = await getAllAuthorsService();

    res.send(allData);
  } catch (error) {
    next(error);
  }
};

export const getByIdAuthorCon = async (req, res, next) => {
  try {
    const authorId = req.params.authorId;
    const oneAuthorData = await getByIdAuthorService(authorId);

    if (oneAuthorData) return res.send(oneAuthorData);

    res.status(404).send("Not found!");
  } catch (error) {
    next(error);
  }
};

export const createAuthorCon = async (req, res, next) => {
  try {
    const result = await createAuthorService(req.body);

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const updateAuthorByIdCon = async (req, res, next) => {
  try {
    const authorId = req.params.authorId

    const result = await updateByIdAuthorService(authorId, req.body)

    res.send(result)
  } catch (error) {
    next(error)
  }
}

export const deleteByIdAuthorCon = async (req, res, next) => {
  try {
    const authorId = req.params.authorId

    const result = await deleteByIdAuthorService(authorId)

    res.send(result)
  } catch (error) {
    next(error)
  }
}