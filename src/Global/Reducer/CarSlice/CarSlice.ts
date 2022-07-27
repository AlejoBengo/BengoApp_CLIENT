/*IMPORT UTILITIES*/
import { createSlice } from '@reduxjs/toolkit';
/*IMPORT DATA*/
import { initialState } from './utilities';

export const carSlice = createSlice({
   name: 'CarSlice',
   initialState,
   reducers: {
      setAllCars: (state, action) => {
         state.allCars = action.payload;
         return state;
      },
   },
});

export const { setAllCars } = carSlice.actions;
export default carSlice.reducer;
