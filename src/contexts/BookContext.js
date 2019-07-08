import React, { createContext, useReducer, useEffect } from "react";
import bookReducer from "../reducers/bookReducer";
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const books = localStorage.books;
    return books ? JSON.parse(books) : [];
  });
  // maintain the list of the books inside the local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
