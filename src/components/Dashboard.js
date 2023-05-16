import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const Dashboard = () => {



const [name,setname] = useState('')
    useEffect(()=>{

        if(!localStorage.getItem('token'))
        {
            window.location ='/login'
        }
        const tk = localStorage.getItem('token')
        const url ="http://localhost:5000/decode/"+tk;
       axios.get(url).then(
        (res)=>{
          console.log(res.data)
          setname(res.data.name)
          
        }
       )
    })
  return (
    <div>
          <Nav/>
         

           
          <div class=" s1">
          
               <div class="text-center">
               <h2>Welcome   {name}</h2>
               <h4>You Can Start Uploading Your Files</h4>
               <Link to={'/upload'} ><button class="btn btn-outline-success">UPLOAD<FileUploadOutlinedIcon/></button></Link>
                </div>  
               
        
         
          </div>

  
    </div>
  )
}

export default Dashboard
