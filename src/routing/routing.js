import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/sections/Home/Home";
import Footer from "../components/layout/footer/footer";
import About from "../components/sections/About/About";
import Navbar from "../components/sections/Home/Navbar";
import Register from "../components/sections/Authentication/Reg";
import Login from "../components/sections/Authentication/Login";
import Profile from "../components/sections/Authentication/Profile";
import SupportPage from "../components/sections/Support/Support";
import PaymentsPage from "../components/sections/Support/Payments";
import ParentGuardianSupport from "../components/sections/Support/Parent";
import AccountsPage from "../components/sections/Support/Accounts";
import ReviewComponent from "../components/sections/Community/Review";
import CategoryPage from "../components/sections/Courses/Category";
import CoursesPage from "../components/sections/Courses/Course";
import DetailPage from "../components/sections/Courses/Details";
import AddCourse from "../components/sections/Courses/Addcourse";
import EditCourse from "../components/sections/Courses/Editcourse";
import ScrollToTop from "../components/sections/Scroll";
import Cart from "../components/sections/Cart/Addtocart";
import PrivateRoute from "../components/sections/private";
import NotFoundPage from "../components/sections/pnf";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        //protected
        <Route
          path="details/:id"
          element={<PrivateRoute element={<DetailPage />} />}
        />
        //public
        <Route path="profile/:id" element={<Profile />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="payment" element={<PaymentsPage />} />
        <Route path="parent" element={<ParentGuardianSupport />} />
        <Route path="account" element={<AccountsPage />} />
        <Route path="review" element={<ReviewComponent />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="courses/:categoryName" element={<CoursesPage />} />
        <Route path="addcourse" element={<AddCourse />} />
        <Route path="editcourse/:id" element={<EditCourse />} />
        <Route path="addtocart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
