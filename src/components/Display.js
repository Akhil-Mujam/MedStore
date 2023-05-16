import axios from 'axios'
import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
const Display = () => {
  const idss = new Array();
  const titles = new Array();
  const notes = new Array();
  const imgs = new Array();
  const[print,setprint] =useState([])
    const [arr,setarr]= useState('')
    const [nb,setnb] = useState();

      const deleteHandler = (id,e) =>{
        e.preventDefault();
        const url="http://localhost:5000/del/"+id;
         axios.delete(url).then(
            (res) =>{
                console.log(res)
            }
         )
      }

    
    useEffect(()=>{
            if(!localStorage.getItem('token'))
            {
              window.location='/login'
            }
            const tk = localStorage.getItem('token')
            const url = "http://localhost:5000/get/"+tk;
            axios.get(url).then(
              (response)=>{
           
                console.log(response)
                console.log(response.data[0]._id)
                setarr(response.data);
                setnb(response.data[0].length);
                const df = response.data;
                for(var i=0;i<df.length;i++)
                {
                    idss.push(response.data[i]._id);
                    titles.push(response.data[i].Title);
                    notes.push(response.data[i].Notes);
                    imgs.push(response.data[i].img)
                }
              }
            ).catch((err)=>{
                 console.log(err)
            })
    },[])
  return (
    <div>
      <Nav/>
      <div className="row">
                {print.map(data =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={data.img} alt="Card image cap" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.Title}</h5>
                    </center>
                    <div class="d-flex justify-content-between">
                        {/* <a href="#" class="btn btn-success" >View</a> */}
                        <Link to={'/Edit/' + data._id}><button class="btn btn-success">View</button></Link>
                        <a href="#"  onClick={(e) => deleteHandler(data._id,e)} class="btn btn-danger">Delete</a>
                        </div>
                    </div>
                    </div>
                    <br/>
                </div>
                
                )}
            </div>
    </div>
  )
}

export default Display
