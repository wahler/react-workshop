import React from 'react';
import { Book } from './BookListItem';
import { useForm} from 'react-hook-form'

interface Props {
  book: Book;
  onBookSubmit?: (book: any) => void
}

export const BookForm: React.FC<Props> = ({ book, onBookSubmit = () => {} }) => {
  const { register, handleSubmit, errors } = useForm({ defaultValues: book });

  const onSubmit = (data: any) => {
    onBookSubmit(data);
  }

  return (
    <form style={{ marginTop: '2rem' }} onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <input type='text' name='isbn' placeholder='isbn' ref={register} />
      </div>

      <div className='form-control'>
        <input
          type='text'
          name='title'
          placeholder='title'
          ref={register({ required: true })}
          style={{ borderColor: errors.title ? 'red' : 'inherit' }}
        />
      </div>

      <div className='form-control'>
        <input
          type='text'
          name='subtitle'
          placeholder='subtitle'
          ref={register}
        />
      </div>

      <div className='form-control'>
        <textarea name='abstract' ref={register} />
      </div>

      <button type='submit'>Save</button>
    </form>
  );
}