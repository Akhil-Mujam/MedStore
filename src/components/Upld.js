import React, { useEffect, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
const Upld = () => {
    const [image,setimage] =useState('')
    const [title,settitle] = useState('')
    const [notes,setnotes] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(image);
        console.log(title)

        axios.post('http://localhost:5000/upload',{
            Title:title,
            Notes:notes,
            img:image
        },{
          headers:{
            'token':localStorage.getItem('token')
          }
        }).then(
            (res)=>{
                console.log(res.data)
                if(res.data=="successfully created a storage")
                {
                    swal({
                        title:"Successfull Login",
                         icon:"success",
                         button:"Go to Dashboard"
                          }).then(function() {
                         window.location ="/dashboard"
                        })
                }
            }
        )
    }
  

     useEffect(()=>{
      if(!localStorage.getItem('token'))
        
         window.location="/login";
     },[])
    
  return (
    <div>
   <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
                <div class="col-6">
                        <span>Title</span>
                        <input type="text" class="form-control" placeholder='enter the title' onChange={(e)=>{settitle(e.target.value)}}/>
                       <span>Notes</span><br/>
                        <textarea placeholder='enter the additional information' row="4" cols="50" onChange={(e)=>{setnotes(e.target.value)}} ></textarea>
               
                       
                </div>
                <div class="col-6">
                      {/* <button class="btn btn-outline-success justify-content-center" ><input  type="file"  onChange={(e)=>{setimage(e.target.files[0])}}/></button> */}
                      url<input type="url" onChange={(e)=>{setimage(e.target.value)}} />
                  

                      {/* image uploading using multer in this col */}
                      <form method="post" action='/imgupload' encType="multipart/form-data">
                        <input type="file" />
                        <input type="submit" name='image'/>
                      </form>


                </div>

                 <div class="justify-content-center">
                       <button class="btn btn-success" onClick={submitHandler}>save</button>
                 </div>
            </div>
            </div>
    </div>
  )
}

export default Upld
