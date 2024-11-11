import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url, { endpoints } from "../../../api/api_url";

export const postContactQuery = createAsyncThunk(
  "support/postContactQuery",
  async (queryData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${base_url}${endpoints.query}`,
        queryData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "An error occurred while posting the query."
      );
    }
  }
);

const supportSlice = createSlice({
  name: "support",
  initialState: {
    contactQueries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContactQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postContactQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.contactQueries.push(action.payload);
      })
      .addCase(postContactQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default supportSlice.reducer;
