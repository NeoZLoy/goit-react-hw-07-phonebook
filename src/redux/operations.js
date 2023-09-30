import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6511bacdb8c6ce52b394f6d1.mockapi.io";

export const fetchContacts = createAsyncThunk('/contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/contacts');
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);

    }
})

export const addContact = createAsyncThunk('/contacts/addContact', async (newContact, thunkAPI) => {
    try {
        const res = await axios.post('/contacts', newContact);
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }})

export const removeContact = createAsyncThunk('/contacts/removeContact', async (contact, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${contact.id}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
  
  