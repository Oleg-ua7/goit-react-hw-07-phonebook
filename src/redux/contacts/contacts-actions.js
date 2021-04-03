import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactError = createAction('contacts/fetchError');

const createContactRequest = createAction('contacts/createRequest');
const createContactSuccess = createAction('contacts/createSuccess');
const createContactError = createAction('contacts/createError');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

export {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
