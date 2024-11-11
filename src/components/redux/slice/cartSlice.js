import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import base_url, { endpoints } from "../../../api/api_url";

const initialState = {
  isLoading: false,
  isError: false,
  allCourses: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  Totalprice: JSON.parse(localStorage.getItem("total")) || 0,
};

// Fetch all courses using createAsyncThunk
export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAllCourses",
  async () => {
    const res = await axios.get(`${base_url}${endpoints.courses}`);
    return res.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add course to cart
    addCourseToCart: (state, { payload }) => {
      const isAlreadyInCart = state.cart.some((item) => item.id === payload.id);
      if (isAlreadyInCart) return;

      const newCourse = {
        id: payload.id,
        title: payload.title,
        price: parseFloat(payload.price),
        image: payload.image,
      };

      state.cart.push(newCourse);
      state.Totalprice += newCourse.price;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.Totalprice));
    },

    // Remove a course from cart
    removeFromCart: (state, { payload: courseId }) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === courseId
      );

      if (existingItemIndex !== -1) {
        const itemToRemove = state.cart[existingItemIndex];
        state.Totalprice -= itemToRemove.price;

        // Remove the item from the cart
        state.cart.splice(existingItemIndex, 1);

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("total", JSON.stringify(state.Totalprice));
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.cart = [];
      state.Totalprice = 0;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.Totalprice));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCourses.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allCourses = payload;
      })
      .addCase(fetchAllCourses.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// Export actions and reducer
export const { addCourseToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
