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

         return (
           <div>
             {book && <BookForm book={book} />}
           </div>
         );
       };