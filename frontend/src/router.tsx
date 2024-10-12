import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";

// AUTH
import AuthLayout from "./layout/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";

// ROOT
import RootLayout from "./layout/root/RootLayout";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route path="/management" element={<div>Management</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Route>
    </Route>
  )
);
