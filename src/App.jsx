
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  {Login }  from "../src/components/Login/Login"
import { Signup} from "../src/components/Signup/Signup"
import { ErrorPage } from "./pages/ErrorPage"
import { Layouts } from "./components/Layouts/AppLayout"
import { Home } from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Music} from "./pages/Music"
import {Vedios} from "./pages/Vedios"
import {Articals} from "./pages/Articals"
import Logout from "./pages/Logout"


const router = createBrowserRouter([
   {
    path: "/",
    element: <Login/>
   },
   {
    path: "/signup",
    element: <Signup/>
   },
  {
    path: "/",
    errorElement : <ErrorPage/>,
    element: <Layouts/>,
    children: [
      {
        path: "Home",
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Music",
        element: <Music/>
      },
      {
        path: "Vedios",
        element: <Vedios/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "Articals",
        element: <Articals/>
      },
      {
        path: "Logout",
        element: <Logout/>
      },
    ]
  }
])
export const App = () => {
 return <RouterProvider router={router}></RouterProvider>
}

export default App