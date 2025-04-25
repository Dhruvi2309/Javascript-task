import React,{useEffect ,useState} from 'react';
import axios from 'axios';
import { Link ,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {
   // const[data,setData]=useState([])
   const {id} =useParams();

   const[values,setValues]=useState({
      name:'',
      email : '',
      phoneno : ''
    })
    const navigate=useNavigate();
    const handleUpdate=(e)=>{
      e.preventDefault();
      axios.put('http://localhost:3000/users',values)
      .then(res =>{
        console.log(res);
        navigate('/')
        
      })
      .catch(err =>console.log(err));
    }
    
 
  

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
    .then(res => {
      setValues(res.data)
       navigate('/')
       
     })
    .catch(err =>console.log(err));
  } ,[])
  return (
    <>
        <div className='d-flex justify-content-center align-items-center bg-light vh-100 '>
           <div>
            <h1>Update User</h1>
            <form  onChange={handleUpdate}>
              <div className='mb-2'>
              <label htmlFor='name'>Name :</label>
              <input type="text" name="name" className='form-control' placeholder='Enter name' 
             value={values.name}  onChange={e => setValues({...values , name :e.target.value})}/>
              </div>
              <div className='mb-2'>
              <label htmlFor='email'>Email :</label>
              <input type="email" name="email" className='form-control' placeholder='Enter email'
              value={values.email} onChange={e => setValues({...values , email :e.target.value})} />
              </div>
              <div className='mb-2'>
              <label htmlFor='phoneno'>Phone no :</label>
              <input type="number" name="phoneno" className='form-control' placeholder='Enter phoneno'
               value={values.phoneno}   onChange={e => setValues({...values , phoneno :e.target.value})}/>
              </div>
              <button className='btn btn-success'>Submit</button><br />
              <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form>
           </div>
        </div>
        </>
  )
}

export default Update;
