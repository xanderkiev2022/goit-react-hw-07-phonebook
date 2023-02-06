import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './thunks/contactsThunks';

// [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const dublicate = state.contacts.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase());
      if (dublicate) return alert(`${payload.name} is already in contacts`);
      state.contacts.push(payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      // const index = state.items.findIndex(task => task.id === action.payload.id);
      // state.items.splice(index, 1);
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
export const getContacts = state => state.contacts.contacts;
