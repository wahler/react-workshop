import React from 'react';
import { useBook } from '../hooks/useBook';
import { match } from 'react-router-dom';
import { BookForm } from './BookForm';

interface RouteParams {
  isbn: string
}

interface Props {
  match: match<RouteParams>
}

export const BookEdit: React.FC<Props> = ({ match: { params: { isbn } } }) => {
  const { book } = useBook(isbn);

  const handleBookSubmit = (data: any) => {
    const payload = {
      ...book,
      ...data,
    }

    fetch(`http://localhost:4730/books/${isbn}`, {
      method: 'put',
      body: JSON.stringify(payload),
    })
  }

  return (
    <div>
      {book && <BookForm book={book} onBookSubmit={handleBookSubmit} />}
    </div>
  );
};