/* eslint-disable import/prefer-default-export */

export const selectBook = (book) => {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
};
