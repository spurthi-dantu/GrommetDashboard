import React from 'react'

import Home1 from './Pages/Home'
import TreesPlanted from './Pages/TreesPlanted'


import {TPContext} from "./Contexts/TimePeriodContext"
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";

// added new feature


function App() {
  //const[display1 , setperiod] = useState("All Time");
    
  return (
    <Router>

    <Routes>
      <Route path="/" element={<Home1/>}/>
     <Route path="/TreesPlanted" element={<TreesPlanted/>}/> 
      {/* <Route path="/Pages/TreesPlanted" element={<TreesPlanted/>}/> */}
    </Routes>
   
    </Router>
  )
}

export default App;
