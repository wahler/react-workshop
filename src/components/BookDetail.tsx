import React from 'react';
import { match, Link } from 'react-router-dom';
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
          <div>Subtitle: {book.subtitle}</div>
          <div>ISBN: {book.isbn}</div>
          <div>Abstract: {book.abstract}</div>

          <Link to={`/books/${isbn}/edit`}>Edit</Link>
        </>
      )}
    </div>
  );
}