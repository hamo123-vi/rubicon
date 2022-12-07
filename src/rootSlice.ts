import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
    tab: string,
    data: [{
        id: number,
        title: string,
        name: string,
        backdrop_path: string,
        poster_path: string
    }],
    searchterm: string,
    page: number,
    total_pages: number
    
}

const initialState: InitialState = {
    tab: 'tv',
    data: [{
        id: 0,
        title: '',
        name: '',
        backdrop_path: '',
        poster_path: ''
    }],
    searchterm: '',
    page: 1,
    total_pages: 0
}

const rootSlice = createSlice({
    name: 'root',

    initialState,

    reducers: {
        enterTab: (state, action) => {state.tab = action.payload},
        enterData: (state, action) => {state.data = action.payload},
        enterSearchTerm: (state, action) => {state.searchterm = action.payload},
        enterPage: (state, action) => {state.page = action.payload},
        enterTotalPages: (state, action) => {state.total_pages = action.payload},
    }
});

export const reducer = rootSlice.reducer;

export const {enterTab, enterData, enterSearchTerm, enterPage, enterTotalPages} = rootSlice.actions