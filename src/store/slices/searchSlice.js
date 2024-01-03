import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const searchCharacters = createAsyncThunk(
    'search/searchCharacters',
    async (query, thunkAPI) => {
        try {
            const res = await axios.get(`https://swapi.dev/api/people/?search=${query}`);
            return res.data.results;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
            }
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
      results: [],
      loading: 'idle',
      error: null,
    },
    reducers: {
      clearResults(state) {
        state.results = [];
        
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(searchCharacters.pending, (state) => {
          state.loading = true;
        })
        .addCase(searchCharacters.fulfilled, (state, action) => {
          state.results = action.payload;
          state.loading = false;
          
        })
        .addCase(searchCharacters.rejected, (state) => {
          state.loading = false;
        });
    },
  });
  
  export const { clearResults } = searchSlice.actions;
  export default searchSlice.reducer;
  
  export const debouncedSearch = (query) => {
    return searchCharacters(query)
  };