import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  username: string;
}
const getLocalData = () => {
  const name = localStorage.getItem("username");
  try {
    return name ? JSON.parse(name) : "";
  } catch (e) {
    console.error("Invalid JSON in localStorage:", e);
    return "";
  }
};
const initialState: UserState = {
  username: getLocalData(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setName: (state) => {
      localStorage.setItem("username", JSON.stringify(state.username));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName, setName } = userSlice.actions;

export default userSlice.reducer;
