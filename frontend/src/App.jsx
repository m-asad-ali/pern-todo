/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainPage from "./Pages/MainPage.jsx";
import SignIn from "./authentication/SignIn.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "/",
//     element: isAuthenticated ? <MainPage /> : <Navigate to="/signin" />,
//   },
// ]);
// function App() {
//   // const { user } = useAuth();
//   return (
//     <>
//       <AuthProvider>
//         <RouterProvider router={router} />
//         <ToastContainer />
//       </AuthProvider>
//     </>
//   );
// }
