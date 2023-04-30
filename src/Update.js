import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { useParams } from 'react-router-dom'
const Update = () => {
    const [image,setimage] =useState('')
    const [title,settitle] = useState('')
    const [notes,setnotes] = useState('')
    //const [id,setid] = useState('')
    let {id} = useParams();
     const submitHandler =(e) =>{
        e.preventDefault();
       
        const url="http://localhost:5000/update/"+id;
        axios.put(url,{
            Title:title,
            Notes:notes,
            img:image
        }).then(
            (arr) =>{
                console.log(arr.data);

                if(arr.data == "successfully updated")
                {
                    swal({
                        title:"Successfull Login",
                         icon:"success",
                         button:"Successfully updated!"
                          }).then(function() {
                         window.location ="/data"
                        })
                }
            }

        )
     }
  return (
    <div>
      <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-6">
                        <span>Title</span>
                        <input type="text" class="form-control" placeholder='enter the title' onChange={(e)=>{settitle(e.target.value)}}/>
                       <span>Notes</span><br/>
                        <textarea placeholder='enter the additional information' row="4" cols="50" onChange={(e)=>{setnotes(e.target.value)}} ></textarea>
               
                       
                </div>
                <div class="col-6">
                      {/* <button class="btn btn-outline-success justify-content-center" ><input  type="file"  onChange={(e)=>{setimage(e.target.files[0])}}/></button> */}
                      url<input type="url" onChange={(e)=>{setimage(e.target.value)}} />
                </div>

                 <div class="justify-content-center">
                       <button class="btn btn-success" onClick={submitHandler}>update</button>
                 </div>
            </div>
            </div>
    </div>
  )
}

export default Update
