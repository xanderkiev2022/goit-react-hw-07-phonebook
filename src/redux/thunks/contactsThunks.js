// https://63e0dbed59bb472a742a7055.mockapi.io/contacts/:endpoint

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContactsThunk = createAsyncThunk('contacts/getContacts', () => getContacts);
