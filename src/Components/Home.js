import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const[data,setData]=useState([])
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res =>setData(res.data))
    .catch(err =>console.log(err));
  } ,[])
  const handleDelete=(id) => {
    const confirm = window.confirm("would you like to delete ?");
    if(confirm) {
      axios.delete('http://localhost:3000/users/' + id)
      .then(res => {
      //  location.reload();
      }).catch(err =>console.log(err));
    }

  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100 '>
      <h1>List of users</h1>
      <div className='mb-3'>
        <div className='d-flex justify-content-end '>
          <Link to='/create'>Add +</Link>
          </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phoneno</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d,i)=> (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phoneno}</td>
                  <td>
                    <Link to={`/read/${d.id}`}>Read</Link>
                    <Link to={`/update/${d.id}`}>Update</Link>
                    <button onClick={e => handleDelete(d.id)}>Delete</button>
                  </td>
                </tr>
              ))
              }
            
          </tbody>

        </table>
        
      </div>

    </div>
  )
 
}

export default Home;
