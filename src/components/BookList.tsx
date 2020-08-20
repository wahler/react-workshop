import React, { useState, useEffect } from 'react';
import { BookListItem } from './BookListItem';

export const BookList: React.FC = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const result = await response.json();
    setBooks(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {books && books.length && (
        <ul>
          {books.map((book, index) => {
            return <BookListItem key={index} book={book} />;
          })}
        </ul>
      )}
    </>
  );
};
