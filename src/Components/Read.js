import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!data.name) {
    return <h3 className="text-center mt-5">Loading user details...</h3>;
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div>
        <h1>Details of User</h1>
        <div className='mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-2'>
          <strong>Phone No: {data.phoneno}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-warning'>Edit</Link>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  );
}
export default Read;


