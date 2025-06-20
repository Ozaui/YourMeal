import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import AllMeals from "../components/meals/AllMeals";
import MealDetails from "../components/meals/MealDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/meals" element={<AllMeals />} />
    <Route path="/meals/:id" element={<MealDetails />} />
  </Routes>
);

export default AppRoutes;
