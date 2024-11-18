import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Item {
    id: number;
    title: string;
    body: string;
}

interface ItemState {
    items: Item[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ItemState = {
    items: [],
    status: 'idle',
    error: null,
};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
});

export default itemSlice.reducer;
