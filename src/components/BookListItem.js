import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
const BookListItem = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  const onDeleteBook = () => {
    removeBook(book.id);
  };

  return (
    <li>
      {book.title} - {book.author}
      <button onClick={onDeleteBook}>Delete</button>
    </li>
  );
};

export default BookListItem;
