/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainPage from "./Pages/MainPage.jsx";
import SignIn from "./authentication/SignIn.jsx";

import { AuthProvider } from "./authentication/AuthContext.jsx";

// dummy isAuthenticated only for testing
const isAuthenticated = false;

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: isAuthenticated ? <MainPage /> : <Navigate to="/signin" />,
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
