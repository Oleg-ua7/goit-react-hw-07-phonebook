import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;

const getFilter = state => state.filter;

const getContactsLength = state => getContacts(state).length;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(
      ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export { getContacts, getFilter, getFilteredContacts, getContactsLength };
