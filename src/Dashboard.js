import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Dashboard = () => {

    useEffect(()=>{

        if(!localStorage.getItem('token'))
        {
            window.location ='/login'
        }
       
    })
  return (
    <div>
          <Nav/>
          <div class="d-flex justify-content-center s1">
          <Link to={'/upload'} ><button class="btn btn-outline-success">UPLOAD<FileUploadOutlinedIcon/></button></Link>
          </div>

  
    </div>
  )
}

export default Dashboard
