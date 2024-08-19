
import './App.css';

import React, { useState} from 'react'
import Nbar from './Components/Nbar.js';
import News from './Components/News.js';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App=()=> {

  const [progress,setProgress]=useState(0)
  

    return (
      <div>
       <Router>
        <Nbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      
      />

        <Routes>
          <Route exact  path="/"element={<News setProgress={setProgress} key="general" pagesize={12} q="general"/>}></Route>
          <Route exact path="/business"element={<News setProgress={setProgress} key="business" pagesize={12} q="business"/>}></Route>
          <Route exact path="/entertainment"element={<News setProgress={setProgress} key="entertainment"pagesize={12} q="entertainment"/>}></Route>
          <Route exact path="/health"element={<News setProgress={setProgress} key="health"pagesize={12} q="health"/>}></Route>
          <Route exact path="/sports"element={<News setProgress={setProgress} key="sports" pagesize={12} q="sports"/>}></Route>
          <Route exact path="/technology"element={<News setProgress={setProgress} key="technology"pagesize={12} q="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}
export default App;



