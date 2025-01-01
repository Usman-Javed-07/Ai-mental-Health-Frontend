
// import "./App.css"

// import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import  Login   from "../src/components/Login/Login"
// import  Signup from "../src/components/Signup/Signup"

// export const App = () => {

//  return (
//   <Router>
//       <div>
//         <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </Router>
//  )
 
// }
// export default App


import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  {Login }  from "../src/components/Login/Login"
import { Signup} from "../src/components/Signup/Signup"
import { ErrorPage } from "./pages/ErrorPage"
import { Layouts } from "./components/Layouts/AppLayout"
import { Home } from "./Pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Music} from "./pages/Music"
import {Vedios} from "./pages/Vedios"

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
    ]
  }
])
export const App = () => {
 return <RouterProvider router={router}></RouterProvider>
}

export default App