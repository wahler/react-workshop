import { render, screen, wait } from '@testing-library/react'
import React from 'react';
import { BookDetail } from './BookDetail';
import { useBook } from '../hooks/useBook';

jest.mock('../hooks/useBook')
jest.mock('react-router-dom', () => {
  return {
    Link: (props: any) => props.children
  }
});

describe('<BookDetail />', () => {
  it('should render details of a book', async () => {
    (useBook as jest.Mock).mockReturnValue({
      loading: false,
      book: {
        title: 'Test Book',
        subtitle: '',
        isbn: '123',
      },
      error: null,
    });

    render(<BookDetail match={{ params: { isbn: '123' }} as any} />);

    await wait(() => screen.getByText(/123/i));

    expect(screen.getByText(/Test Book/i)).toBeInTheDocument()
  });
})