import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        {/* <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand d-flex  justify-content-between"  href="#">
        <div class="tot" >
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NtieW_8P6bXhjUYngTTizx8vNgITzj6Cp0L0JSqEUQ&usqp=CAU&ec=48665701" alt="" width="40" height="30" class="d-inline-block align-text-top" />
      <h3 class="px-3">MedStore</h3>
      </div>
      <div class="h2">
           <Link to={'/upload'}><button class="btn btn-outline-dark text-white">Upload</button></Link>
      </div>
      <div class="h2">
           <Link to={'/data'}><button class="btn btn-dark">View</button></Link>
      </div>
    </a>
    
  </div>
  
</nav> */}


<nav class="navbar bg-success m-0 p-0">
  <div class="container-fluid">
 
    <a class="navbar-brand d-flex">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NtieW_8P6bXhjUYngTTizx8vNgITzj6Cp0L0JSqEUQ&usqp=CAU&ec=48665701" alt="" width="40" height="30" class="d-inline-block align-text-top" />
      <h3 class="text-dark">MedStore</h3></a>
    <form class="d-flex" role="search">
      <Link to={'/upload'}><button class="btn btn-outline-dark text-dark mx-2">Upload</button></Link>
      <Link to={'/data'}><button class="btn btn-dark">View</button></Link>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Nav
