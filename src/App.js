import React from 'react'
import Upld from './components/Upld'
import Frontpage from './components/Frontpage'
import Display from './components/Display'
import Edit from './components/Edit'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Update from './components/Update'
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
