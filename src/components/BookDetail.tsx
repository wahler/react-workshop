import React from 'react';
import { match } from 'react-router-dom';
import { useBook } from '../hooks/useBook';

interface RouteParams {
  isbn: string
}

interface Props {
  match: match<RouteParams>
}

export const BookDetail: React.FC<Props> = ({ match: { params: { isbn }} }) => {
  const { book, loading } = useBook(isbn);

  if (loading === true) {
    return (<div>Loading...</div>)
  }

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