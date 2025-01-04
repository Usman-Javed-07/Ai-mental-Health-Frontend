/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider, useNavigation } from "react-router-dom";
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

const AppWithLoader = ({ children }) => {
  const navigation = useNavigation(); 

  return (
    <>
      {navigation.state === "loading" && <Loader />}
      {children}
    </>
  );
};

const router = createBrowserRouter(
  [
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
          element: <Home />,
          
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Music",
          element: <Music />,
        },
        {
          path: "Vedios",
          element: <Vedios />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Articals",
          element: <Articals />,
        },
      ],
    },
  ],
  {
    basename: "/", 
  }
);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
