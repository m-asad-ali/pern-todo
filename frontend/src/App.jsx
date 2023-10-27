import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./Pages/MainPage.jsx";
import SignIn from "./authentication/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
