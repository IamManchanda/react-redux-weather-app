import { combineReducers } from 'redux';
import books from './books/books';
import activeBook from './books/active-book';

export default combineReducers({ books, activeBook });
