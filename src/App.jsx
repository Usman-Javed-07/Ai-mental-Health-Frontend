import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../src/components/Login/Login";
import { Signup } from "../src/components/Signup/Signup";
import { ErrorPage } from "./pages/ErrorPage";
import { Layouts } from "./components/Layouts/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Music } from "./pages/Music";
import { Vedios } from "./pages/Vedios";
import { Articals } from "./pages/Articals";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/Layouts/PrivateRoute"; // Import PrivateRoute
import { AuthProvider } from "./components/context/AuthContext"; // Import AuthProvider

// eslint-disable-next-line react/prop-types
const AppWithLoader = ({ children }) => {
  return (
    <>
      <Loader />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <AppWithLoader>
        <Layouts />
      </AppWithLoader>
    ),
    children: [
      {
        path: "Home",
        element: <PrivateRoute element={<Home />} />, // Protect route
      },
      {
        path: "About",
        element: <PrivateRoute element={<About />} />,
      },
      {
        path: "Music",
        element: <PrivateRoute element={<Music />} />,
      },
      {
        path: "Vedios",
        element: <PrivateRoute element={<Vedios />} />,
      },
      {
        path: "Contact",
        element: <PrivateRoute element={<Contact />} />,
      },
      {
        path: "Articals",
        element: <PrivateRoute element={<Articals />} />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
