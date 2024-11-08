import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
import { COLOR_THEME } from '../../utils/constants/Constants';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    store: undefined,
    authToken: undefined,
    isLoggedIn: false,
    needsEmailVerification: false,
    colorTheme: COLOR_THEME.LIGHT,
    userColorTheme: COLOR_THEME.SYSTEM,
    invitedByPartner: null,
  },
  reducers: {
    storeInvitedByPartner(state, action) {
      state.invitedByPartner = action.payload;
    },
    loginUser(state, action: PayloadAction) {
      //   state.authToken = action.payload.authToken;
      //   state.user = data.user;
      //   state.store = data.store;
      //   state.isLoggedIn = true;
      console.log('ACTION REDUCER LOGIN', action);
    },
    logout(state) {
      state.user = undefined;
      state.store = undefined;
      state.authToken = undefined;
      state.isLoggedIn = false;
      state.needsEmailVerification = false;
      state.colorTheme = COLOR_THEME.LIGHT;
      state.userColorTheme = COLOR_THEME.SYSTEM;
      state.invitedByPartner = null;
    },
    
    changeColorTheme(state, action) {
      console.log('changeColorTheme Dispatch=====>', action.payload);
      // state.colorTheme = action.payload;
      state.userColorTheme = action.payload;
      state.colorTheme =
        action.payload === COLOR_THEME.SYSTEM
          ? Appearance.getColorScheme()
          : action.payload;
    },
  },
 
});

export const {
  storeInvitedByPartner,
  logout,
  changeColorTheme,
} = authSlice.actions;
export default authSlice.reducer;
