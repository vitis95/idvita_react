import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
export interface InitialStateProps {
  isSignedIn: null;
}
const initialState = {
  isSignedIn: null,
} as InitialStateProps;
export const fetchUser = createSlice({
  name: "isSignedIn",
  initialState,
  reducers: {
    getUser: (state: InitialStateProps, action: PayloadAction<null>) => {
      state.isSignedIn = action.payload;
    },
  },
});
export const { getUser } = fetchUser.actions;
export default fetchUser.reducer;
