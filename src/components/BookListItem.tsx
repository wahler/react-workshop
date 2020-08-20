import React from 'react';
import { Link } from 'react-router-dom';

export interface Book {
  title: string;
  subtitle: string;
  abstract: string;
  isbn: string
}

interface Props {
  book: Book;
}

export const BookListItem: React.FC<Props> = ({ book }) => {
  return (
    <li>
      <Link to={`/books/${book.isbn}`}>{book.title}</Link>
    </li>
  );
}