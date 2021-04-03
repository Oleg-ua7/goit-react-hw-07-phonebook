import axios from 'axios';
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

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const createContact = contact => async dispatch => {
  dispatch(createContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(createContactSuccess(data)))
    .catch(error => dispatch(createContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => dispatch(deleteContactSuccess(data)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { fetchContacts, createContact, deleteContact };
