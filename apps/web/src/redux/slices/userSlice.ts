import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  name: string;
  email: string;
  image: string;
  address: string;
  phone: string;
  role: string;
  provider?: string | null;
  token?: string;
}

enum Provider {
  CREDENTIALS,
  GOOGLE,
}

const initialState: UserState = {
  id: 0,
  name: "",
  email: "",
  image: "",
  address: "",
  phone: "",
  role: "",
  provider: null,
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.role = action.payload.role;
      state.provider = action.payload.provider;
      state.token = action.payload.token;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.name = "";
      state.email = "";
      state.image = "";
      state.address = "";
      state.phone = "";
      state.role = "";
      state.provider = null;
      state.token = "";
    },
    updateProfileAction: (state, action: PayloadAction<Partial<UserState>>) => {
      const { name, email, image, address, phone } = action.payload;
      if (name !== undefined) state.name = name;
      if (email !== undefined) state.email = email;
      if (image !== undefined) state.image = image;
      if (address !== undefined) state.address = address;
      if (phone !== undefined) state.phone = phone;
    },
  },
});

export const { loginAction, logoutAction, updateProfileAction } = userSlice.actions;
export default userSlice.reducer;
