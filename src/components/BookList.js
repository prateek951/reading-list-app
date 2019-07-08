import React, { useContext, Fragment } from "react";
import { BookContext } from "../contexts/BookContext";
import BookListItem from "./BookListItem";
const BookList = () => {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  return (
    <Fragment>
      <ul>
        {books.map(book => (
          <BookListItem key={book.id} book={book} />
        ))}
      </ul>
    </Fragment>
  );
};

export default BookList;
