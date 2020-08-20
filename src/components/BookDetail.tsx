import React, { useEffect, useState, useMemo } from 'react';
import { match } from 'react-router-dom';
import { Book } from './BookListItem';

interface RouteParams {
  isbn: string
}

interface Props {
  match: match<RouteParams>
}

export const BookDetail: React.FC<Props> = ({ match: { params: { isbn }} }) => {
  const [book, setBook] = useState<Book>();

  const fetchBook = useMemo(() => {
    return async () => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const result = await response.json();
      setBook(result);

      // await fetch()

    };
  }, [isbn])

  useEffect(() => {
    fetchBook()
  }, [fetchBook, isbn])

  return (
    <div>
      {book && (
        <>
          <div>Title: {book.title}</div>
          <div>Subtitle: {book.title}</div>
          <div>ISBN: {book.isbn}</div>
          <div>Abstract: {book.abstract}</div>
        </>
      )}
    </div>
  );
}