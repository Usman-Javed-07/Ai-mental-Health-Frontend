
import "./App.css"

import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import  Login   from "../src/components/Login/Login"
import  Signup from "../src/components/Signup/Signup"

export const App = () => {

 return (
  <Router>
      <div>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
 )
 
}
export default App