import React , {useEffect ,useState}from 'react';
import { useParams,BrowserRouter ,Link ,useNavigate } from 'react-router-dom';

function Test() {
  return (
    <div>
      <h1> Login Page</h1>
      <label htmlFor='uname'>UserName :</label>
      <input type="uname" name='uname' className='form-control'  placeholder='Enter Your Username'/><br />
      <label htmlFor='password'>Password :</label>
      <input type="password" name='password' className='form-control'  placeholder='Enter Your password'/><br />
      <button className='btn btn-success'>Login</button>
    </div>
  )
}

export default Test
