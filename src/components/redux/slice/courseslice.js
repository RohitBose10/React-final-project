// src/redux/slices/coursesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url, { endpoints } from "../../../api/api_url";

export const fetchCoursesByCategory = createAsyncThunk(
  "courses/fetchByCategory",
  async (categoryName) => {
    const response = await axios.get(`${base_url}${endpoints.courses}`);
    return response.data.filter(
      (course) => course.category_name === categoryName
    );
  }
);

export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (courseData) => {
    const response = await axios.post(
      `${base_url}${endpoints.courses}`,
      courseData
    );
    return response.data;
  }
);
export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id) => {
    await axios.delete(`${base_url}${endpoints.courses}${id}`);
    return id; // Return the id to filter it out in the reducer
  }
);



export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, updatedCourseData }) => {
    const response = await axios.put(
      `${base_url}${endpoints.courses}${id}`,
      updatedCourseData
    );
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    searchQuery: "",
    status: "idle",
    error: null,
  },
  reducers: {
    setCourseSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoursesByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCoursesByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(
          (course) => course.id === action.payload.id
        );
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(
          (course) => course.id !== action.payload
        );
      });
  },
});  

export const { setCourseSearchQuery } = coursesSlice.actions;
export const selectFilteredCourses = (state) => {
  const { courses, searchQuery } = state.courses;
  return courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default coursesSlice.reducer;
