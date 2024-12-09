import { createSlice } from "@reduxjs/toolkit";
export interface UserState {
  username: string;
  profileImage: string | null;
}

const getLocalData = () => {
  const username = localStorage.getItem("username");
  const profileImage = localStorage.getItem("profileImage");

  return {
    username: username ? JSON.parse(username) : "",
    profileImage: profileImage ? profileImage : null,
  };
};

const initialState: UserState = getLocalData();

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

    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
      localStorage.setItem("profileImage", state.profileImage || "");
    },

    removeProfileImage: (state) => {
      state.profileImage = null;
      localStorage.removeItem("profileImage");
      localStorage.removeItem("username");
      state.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName, setName, removeProfileImage, setProfileImage } =
  userSlice.actions;

export default userSlice.reducer;
