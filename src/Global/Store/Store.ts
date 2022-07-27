/*IMPORT UTILITIES*/
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
/*IMPORT REDUCERS*/
import UserSlice from '../Reducer/UserSlice/UserSlice';
import CarSlice from '../Reducer/CarSlice/CarSlice';

export const store = configureStore({
   reducer: {
      UserSlice,
      CarSlice,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
