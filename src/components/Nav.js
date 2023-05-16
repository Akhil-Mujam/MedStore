import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import axios from 'axios';


import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
const Nav = () => {

  const [img,setimg] =useState('')
  const [user,settitle] = useState('')
    const settings = ['Profile','Account','Make Friends','Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  
    const log = (e)=>{
      localStorage.removeItem('token')
       window.location="/"
  }


     useEffect(()=>{
      const token = localStorage.getItem('token')
       const url = "http://localhost:5000/decode/"+token;
         axios.get(url).then(
         (res)=>{
                settitle(res.data.Title)
                setimg(res.data.img)
         }
         )
     })
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
    <form class="d-flex justify-content-between align-center" role="search">
      <Link to={'/upload'}><button class="btn btn-outline-dark text-white mx-2">Upload</button></Link>
      <Link to={'/data'}><button class="btn btn-dark">View</button></Link>
      {/* <button class="btn btn-outline-dark" onClick={log}>LogOut</button> */}
  
  <div class="row">
    <div class="col-md-4 ">
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="https://www.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-no-1153673752"
                src="{img}"
                sx={{ width: 56, height: 56, marginRight: 10 }}
              />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><a href={'/profile' + uid}>Profile</a></Typography>
                </MenuItem> */}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><a href={'/'} class="text-decoration-none"onClick={log}>Logout</a></Typography>
                </MenuItem>
            </Menu>
          </Box>
                 
              </div>
              </div>
              </form>
              
  </div>
  
</nav>
    </div>
  )
}

export default Nav
