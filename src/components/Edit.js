import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
import {EmailShareButton} from 'react-share';
import {EmailIcon} from 'react-share';
import './Data.css';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
const Edit = () => {
    const[title,settitle] =useState('')
    const[notes,setnotes] =useState('')
    const[image,setimage] =useState('')
    let {id} = useParams();
   
    const DownloadHandler =(e) =>{
      e.preventDefault();
    const ul = "http://localhost:5000/image/"+id;
    
      axios({
        url:ul,
         method:"GET",
         responseType: "blob"
      }).then(
        (res) =>{
          console.log(res.data)
          const url1 = window.URL.createObjectURL(new Blob([res.data]));

           const link = document.createElement("a");

           link.href = url1;

           link.setAttribute("download","images.jpg")

           document.body.appendChild(link)
           link.click()
                }
      )

  
    }

    useEffect(() =>{
        const url= "http://localhost:5000/view/"+id;
        axios.get(url).then(
           (res)=>{
            //console.log(res.data);
            
            settitle(res.data.Title);
            setnotes(res.data.Notes);
            setimage(res.data.img);
            
           }
        )
    },[])
  return (
    <div>
           <div class="container">
            <div class="share">

         
                      <button class="btn btn-success mx-3 px-3" ><Link to={'/update/'+id} class="ed">Edit</Link></button>
                            <EmailShareButton>
                               <EmailRoundedIcon/>
                            </EmailShareButton>
  
              <button class="btn1" onClick={DownloadHandler}><DownloadIcon/></button>
                  {/* <button class="btn btn-primary" onClick={DownloadHandler}>Download</button> */}

                  </div> 
            <div class="row d-flex align-items-center">
                <div class="col-6">
                        <span>Title</span>
                        
                        {/* <input type="text" class="form-control" placeholder="" /> */}
                       <h3><b>{title}</b></h3>
                       <span>Notes</span><br/>
                        {/* <textarea placeholder='enter the additional information' row="4" cols="50" ></textarea> */}
                        <h5><b>{notes}</b></h5>
                       
                </div>
                <div class="col-6 my-4">
                      {/* <button class="btn btn-outline-success justify-content-center" ><input  type="file"  onChange={(e)=>{setimage(e.target.files[0])}}/></button> */}
                      {/* url<input type="url"  /> */}
                      <img src={image}  width="480px" height="480px"/>
                </div>

                 <div class="justify-content-center">
                       <button class="btn btn-success" >save</button>
                 </div>
            </div>
            </div>
    </div>
  )
}

export default Edit
