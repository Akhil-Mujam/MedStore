import React from 'react'
import { Link } from 'react-router-dom'
import './Data.css'
import Footer from './Footer'

const Frontpage = () => {
  return (
    <div >
          
          <div > 
             
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
 
<div class="items my-4 ">


<div class="row">
       <div class="col-md-6">
       
       <div class="dat mx-3 ">
      <h1>Health Prescription</h1>
        <h4> Access your medical records from where you are <br/> Just in one Click u can upload your records <br/>
          Get everything through your browser</h4>
          <Link to={'/login'}><button class="btn btn-dark m-3 px-4 rounded-9"><span>Login</span></button></Link>

       </div>

       </div>

       <div class="col-md-6">
         
         <div class="img p-3 text-center">
            <img src="https://th.bing.com/th/id/OIP.fwOPNTBmDmwrgM-NlZ2ShgAAAA?w=271&h=219&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="400px" height="400px"/>
          </div>
       </div>
  </div>

 


  </div>
  <div class="steps " >
    <br/>
      <div class="tag text-center">

      
          <h3><strong>How to save your Data</strong> </h3>
      </div>
      <br/><br/>


      
      <div class="row text-center" >
          <div class="col-md-4 shadow" >
          <div class="card co1" >
  <img src="https://th.bing.com/th/id/OIP.J-CXs28P_yZryqw_PON8owHaE7?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title "><strong>Sign Up Your Account</strong></h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  
  </div>
</div>
          </div>
          <div class="col-md-4 shadow d-flex" >
          <div class="card co1" >
  <img src="https://th.bing.com/th/id/OIP.vK-2F3BLDdw8gRwC5dMlvwHaFW?w=212&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="..." />
  <div class="card-body">
    <h5 class="card-title"><strong>Fill Your Data</strong></h5>
  
    
  </div>
</div>
  
          </div>
          <div class="col-md-4 shadow" >
          <div class="card co1" >
         <img src="https://th.bing.com/th/id/OIP.1STMxuvwf_sxyUl64YooGwHaEi?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." />
               <div class="card-body">
        <h5 class="card-title"><strong>Click on Save</strong> </h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    
               </div>
             </div>
          </div>
      </div>
  </div>
  

        
  <Footer/>
</div>
 
 
    </div>
  )
}

export default Frontpage

