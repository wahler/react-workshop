import { useReducer, useEffect } from 'react';

function reducerFn(state: any, action: any) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
        book: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        book: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const useBook = (isbn: string) => {
  const [state, dispatch] = useReducer(reducerFn, {
    loading: false,
    book: null,
    error: null,
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        dispatch({ type: 'FETCH_INIT' });
        const response = await fetch(`http://localhost:4730/books/${isbn}`);
        const result = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (e) {
        dispatch({ type: 'FETCH_ERROR', payload: e });
      }
    };

    fetchBook();
  }, [isbn]);

  return {
    book: state.book,
    loading: state.loading,
    error: state.error,
  };
};
