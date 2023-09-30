import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, addContact, removeContact } from "./operations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = action.payload;
        }).addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(addContact.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts.push(action.payload);
            state.error = null;
        }).addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(removeContact.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        }).addCase(removeContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            state.error = null;
        }).addCase(removeContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }

    })

export const contactsReducer = contactsSlice.reducer;

