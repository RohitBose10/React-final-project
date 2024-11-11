// src/redux/slices/detailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url, { endpoints } from "../../../api/api_url";

export const fetchCourseDetails = createAsyncThunk(
  "course/fetchDetails",
  async (id) => {
    const response = await axios.get(`${base_url}${endpoints.courses}${id}`);
    return response.data;
  }
);

const detailSlice = createSlice({
  name: "courseDetails",
  initialState: {
    course: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.course = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default detailSlice.reducer;
