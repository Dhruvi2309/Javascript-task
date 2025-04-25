import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const[values,setValues]=useState({
    name:'',
    email : '',
    phoneno : ''
  })

  const navigate=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then(res =>{
      console.log(res);
      navigate('/')
      
    })
    .catch(err =>console.log(err));
  }
  

  return (
    <>
    <div className='d-flex justify-content-center align-items-center bg-light vh-100 '>
       <div>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" className='form-control' placeholder='Enter name' 
          onChange={e => setValues({...values , name :e.target.value})}/>
          </div>
          <div className='mb-2'>
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" className='form-control' placeholder='Enter email'
          onChange={e => setValues({...values , email :e.target.value})}/>
          </div>
          <div className='mb-2'>
          <label htmlFor="phoneno">Phone no :</label>
          <input type="number" name="phoneno" className='form-control' placeholder='Enter phoneno'
          onChange={e => setValues({...values , phoneno :e.target.value})}/>
          </div>
          <button className='btn btn-success'>Submit</button><br />
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
       </div>
    </div>
    </>
  )
}


export default Create;
