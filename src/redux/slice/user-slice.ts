import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  profileImage: string | null;
  username: string;
}

const getLocalData = () => {
  const name = localStorage.getItem("username");
  return name ? JSON.parse(name) : "";
};

const initialState: UserState = {
  profileImage: null, // مقدار اولیه برای تصویر پروفایل
  username: getLocalData(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    removeProfileImage: (state) => {
      state.profileImage = null;
    },
    setName: (state) => {
      localStorage.setItem("username", JSON.stringify(state.username));
      state.username = "";
    },
  },
});

export const { setUserName, setProfileImage, removeProfileImage, setName } =
  userSlice.actions;

export default userSlice.reducer;
