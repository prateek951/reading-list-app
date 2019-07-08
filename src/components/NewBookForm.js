import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, author);
    if (title.trim() === "" || author.trim() === "") {
      return;
    }
    dispatch({ type: "ADD_BOOK", payload: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the title for the new book"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter the author for the new book"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default NewBookForm;
