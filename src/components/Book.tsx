import React, { useState, useEffect } from "react";

interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

const Book = () => {
  const [book, setBook] = useState<BookI>({
    title: null,
    subtitle: null,
    numPages: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:4730/books/978-1-59327-584-6"
      );
      const book = await response.json();
      setBook(book);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  );
};

export default Book;
