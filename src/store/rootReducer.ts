import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
