import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
;

const initialState = { 
    data: [{ loading: 'idle', entities:[]}], 
    currentPage: 0
};



export const fetchData = createAsyncThunk(
    'characters/fetchByNumberPage',
    async (pageNumber, thunkAPI) => {
        try {
        const res = await fetch(`https://swapi.dev/api/people/?page=${pageNumber + 1}`)
        const data = await res.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    });
    

export const charactersSlice  = createSlice({
    name: "characters",
    initialState,
    reducers: {
        nextPage(state) {
            state.currentPage++;
            state.data[state.currentPage] = { loading: "idle", entities:[]};
            return state;
        },
        prevPage(state) {
            state.currentPage--;
            return state;
        }
    },
    extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
        state.data[action.meta.arg] = {
            entities: [],
            loading: "pending"
        };
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.data[action.meta.arg] = {
            entities: action.payload.results,
            loading: "succeeded"
        };
    });
    builder.addCase(fetchData.rejected, (state) => {
        state.loading = "rejected";

      });
    },
});

export default charactersSlice.reducer;