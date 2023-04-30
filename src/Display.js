import axios from 'axios'
import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
const Display = () => {
    
    const [print,setPrint] = useState([]);

      const deleteHandler = (id,e) =>{
        e.preventDefault();
        const url="http://localhost:5000/del/"+id;
         axios.delete(url).then(
            (res) =>{
                console.log(res)
            }
         )
      }

    useEffect(() => {
        axios.get('http://localhost:5000/data').then(
          (res)=>{
           
                setPrint(res.data)
                console.log(print);
          }
        )
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
