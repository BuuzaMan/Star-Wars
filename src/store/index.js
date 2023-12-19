import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { charactersSlice} from '../store/slices/charactersSlice'

const rootReducer = combineReducers ({
  characters: charactersSlice.reducer
});

export const store = configureStore ({
  reducer: rootReducer
});


export default store;





