import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => [...payload],
  [createContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const loadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [createContactRequest]: () => true,
  [createContactSuccess]: () => false,
  [createContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContactError]: error => error,
  [createContactError]: error => error,
  [deleteContactError]: error => error,
});

export { contactsReducer, loadingReducer, errorReducer };
