import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import base_url, { endpoints } from "../../../api/api_url";

const api = `${base_url}${endpoints.users}`;

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data: existingUsers } = await axios.get(api);

      const emailExists = existingUsers.find(
        (user) => user.email === newUser.email
      );
      const usernameExists = existingUsers.find(
        (user) => user.username === newUser.username
      );

      if (emailExists) {
        return rejectWithValue(
          "Email already exists. Please use another email."
        );
      }

      if (usernameExists) {
        return rejectWithValue(
          "Username already exists. Please use another username."
        );
      }

      const { data } = await axios.post(api, newUser);
      return data;
    } catch (error) {
      return rejectWithValue("Registration failed.");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(api);

      const user = data.find(
        (u) =>
          u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userRole", user.role);
        return user;
      }

      return rejectWithValue("Invalid email or password");
    } catch (error) {
      return rejectWithValue("Login failed.");
    }
  }
);

export const profile = createAsyncThunk(
  "auth/profile",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${api}${userId}/`);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch profile.");
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (updatedData, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem("userId");
      const { data } = await axios.put(`${api}${userId}/`, updatedData);
      return data;
    } catch (error) {
      return rejectWithValue("Failed to update profile.");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("userRole");
  return null; // Clears the user state
});

const initialState = {
  isLoading: false,
  user: null,
  error: null,
  profileStatus: "idle",
  profileError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
      })
      // Login cases
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
      })
      // Profile fetch cases
      .addCase(profile.pending, (state) => {
        state.profileStatus = "loading";
        state.profileError = null;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.profileStatus = "succeeded";
        state.user = action.payload;
        state.profileError = null;
      })
      .addCase(profile.rejected, (state, action) => {
        state.profileStatus = "failed";
        state.profileError = action.payload;
      })
      // Update profile cases
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Logout case
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
