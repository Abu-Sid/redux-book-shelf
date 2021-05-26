import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const books = useSelector((state) => state.books.finishedBookList);
  return (
    <PageLayout>
      {books.length ? (
        books.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
    </PageLayout>
  );
};

export default FinishedBooks;
