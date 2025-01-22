import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookAlreadyRegistered } from "../middlewares/isBookAlreadyRegistered.middleware";
import { RequestValidation } from "../middlewares/requestValidation.middleware";
import { addBookSchema, updateBookSchema } from "../schemas/book.schema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post(
  "/",
  RequestValidation.execute({ body: addBookSchema }),
  IsBookAlreadyRegistered.execute,
  booksControllers.addBook
);

booksRouter.get("/", booksControllers.getAll);

booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getById);

booksRouter.patch(
  "/:id",
  RequestValidation.execute({ body: updateBookSchema }),
  IsBookIdValid.execute,
  IsBookAlreadyRegistered.execute,
  booksControllers.updateBook
);

booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook);
