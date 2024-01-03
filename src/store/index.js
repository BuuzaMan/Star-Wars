import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { charactersSlice} from '../store/slices/charactersSlice'
import { searchSlice } from '../store/slices/searchSlice'



const rootReducer = combineReducers ({
  characters: charactersSlice.reducer,
  search: searchSlice.reducer
  
});

export const store = configureStore ({
  reducer: rootReducer,
});


export default store;





