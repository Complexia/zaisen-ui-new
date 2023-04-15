import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountState {
  account: string;
}

const initialState: AccountState = {
  account: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },

    setLensAccessToken: (state, action: PayloadAction<string>) => {
        state.account = action.payload;
      },
  },
});

export const { setAccount, setLensAccessToken } = accountSlice.actions;

export default accountSlice.reducer;
