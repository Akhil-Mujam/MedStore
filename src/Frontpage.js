import React from 'react'
import { Link } from 'react-router-dom'
import './Data.css'

const Frontpage = () => {
  return (
    <div >
          
          <div> 
             
          <nav class="navbar bg-none m-0 p-0 ">
  <div class="container-fluid ">
 
    <a class="navbar-brand d-flex">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NtieW_8P6bXhjUYngTTizx8vNgITzj6Cp0L0JSqEUQ&usqp=CAU&ec=48665701" alt="" width="40" height="30" class="d-inline-block align-text-top" />
      <h3 class="text-dark">MedStore</h3></a>
    <form class="d-flex" role="search">
    <Link to={'/login'}><button class="btn btn-outline-dark mx-3 rounded-9"><span>Login</span></button></Link>
    <Link to={'/register'}><button class="btn btn-dark rounded-9"><span>Sign up</span></button></Link>
    </form>
  </div>
</nav>

  <div class="dat mx-3 ">
      <h1>Health Prescription</h1>
        <h4> Access your medical records from where you are <br/> Just in one Click u can upload your records <br/>
          Get everything through your browser</h4>
          <Link to={'/login'}><button class="btn btn-dark m-3 px-4 rounded-9"><span>Login</span></button></Link>

  </div>

</div>


    </div>
  )
}

export default Frontpage

