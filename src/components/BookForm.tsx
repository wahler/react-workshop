import React, { useState, FormEvent } from 'react';
import { Book } from './BookListItem';

interface Props {
  book: Book;
}

export const BookForm: React.FC<Props> = ({ book }) => {
  const [title, setTitle] = useState<string>(book.title);
  const [isbn, setIsbn] = useState<string>(book.isbn);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

  }

  return (
    <form style={{marginTop: '2rem'}} onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          name='isbn'
          placeholder='isbn'
          value={isbn}
          onChange={(event) => {
            setIsbn(event.target.value);
          }}
        />
      </div>

      <div className="form-control">
        <input
          name='title'
          placeholder='title'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>


      <button type="submit">Save</button>
    </form>
  );
}