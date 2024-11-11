import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authenticationslice";
import reviewReducer from "../slice/reviewslice";
import categoryReducer from "../slice/categoryslice";
import coursesReducer from "../slice/courseslice";
import detailReducer from "../slice/detailslice";
import cartReducer from "../slice/cartSlice";
import supportReducer from "../slice/queryslice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    rev: reviewReducer,
    categories: categoryReducer,
    courses: coursesReducer,
    courseDetails: detailReducer,
    cart: cartReducer,
    support: supportReducer,
  },
});

export default store;
