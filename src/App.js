import React from 'react'
import Upld from './Upld'
import Frontpage from './Frontpage'
import Display from './Display'
import Edit from './Edit'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Update from './Update'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
        <BrowserRouter>
    <div>
        <Routes>
          <Route exact path="/" element={<Frontpage />} />
          <Route exact path="/data" element={<Display />} />
          <Route exact path="/upload" element={<Upld />} />
          <Route exact path="/Edit/:id" element={<Edit />} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/update/:id" element={<Update/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App
