import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  // [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      const dublicate = state.contacts.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase());
      if (dublicate) return alert(`${payload.name} is already in contacts`);
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.contacts.contacts;
