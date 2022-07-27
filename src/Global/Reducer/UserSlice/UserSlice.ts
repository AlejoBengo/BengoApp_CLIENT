/*IMPORT UTILITIES*/
import { createSlice } from '@reduxjs/toolkit';
/*IMPORT DATA*/
import { initialState } from './utilities';

export const userSlice = createSlice({
   name: 'UserSlice',
   initialState,
   reducers: {
      setPersonalData: (state, action) => {
         state.personalData = action.payload;
         return state;
      },
   },
});

export const { setPersonalData } = userSlice.actions;
export default userSlice.reducer;
