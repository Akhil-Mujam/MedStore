import React from 'react'
import { Link } from 'react-router-dom'
import './Data.css'

const Frontpage = () => {
  return (
    <div class ="backimg">
          
          <div> 
             
          <nav class="navbar bg-none m-0 p-0">
  <div class="container-fluid">
 
    <a class="navbar-brand d-flex">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NtieW_8P6bXhjUYngTTizx8vNgITzj6Cp0L0JSqEUQ&usqp=CAU&ec=48665701" alt="" width="40" height="30" class="d-inline-block align-text-top" />
      <h3 class="text-dark">MedStore</h3></a>
    <form class="d-flex" role="search">
    <Link to={'/login'}><button class="btn btn-outline-dark mx-3"><span>Login</span></button></Link>
    <Link to={'/register'}><button class="btn btn-dark"><span>Sign up</span></button></Link>
    </form>
  </div>
</nav>

<div class="container shadow">
        <div class="row my-4 p-4 ">
            {/* <div class="col-md-6 py-4">
                <img class="img-responsive" src="https://tse2.mm.bing.net/th?id=OIP.PpVu9H0S1AELIhlwxKitbgHaE8&pid=Api&P=0" alt="code friend"/>

            </div> */}
            <div class="col-md-6 py-4 align-self-center  fst-italic">
               <div class="center">
               <center><h2>Health </h2></center>
               </div>
           <p> codefriend is friendly website to everyone to every coder .This codefriend is used to get the solutions for your problems through your friends
             </p>
            </div>
        </div>
    </div>
    <div class="container shadow">
        <div class="row my-4 p-4 ">
            {/* <div class="col-md-6 py-4">
                <img class="img-responsive" src="https://tse2.mm.bing.net/th?id=OIP.PpVu9H0S1AELIhlwxKitbgHaE8&pid=Api&P=0" alt="code friend"/>

            </div> */}
            <div class="col-md-6 py-4 align-self-center  fst-italic">
               <div class="center">
               <center><h2>Health </h2></center>
               </div>
           <p> codefriend is friendly website to everyone to every coder .This codefriend is used to get the solutions for your problems through your friends
             </p>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Frontpage

