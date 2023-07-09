import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const Register = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        name: name,
        email: email,
        password: password
      };

      const requestBodyString = JSON.stringify(requestBody);

      await axios.post('https://notes-api.dicoding.dev/v1/register', requestBodyString, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      navigate("/login");
    } catch (error) {
      console.log("Error saat melakukan registrasi:", error.response.data);
    }
  }

  return (
    <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 min-h-screen'>
      <div className='flex justify-center items-center h-screen'>
        <div className='max-w-md m-[0 auto] p-5 bg-gray-200 border-[1px] border-gray-400 rounded-lg'>
          <h1 className='text-center mb-5'>User Registrasi</h1>
          <form onSubmit={Register} className='login-form'>
            <div className='mb-5'>
              <label className='block mb-2 font-bold'>Nama</label>
              <input type='text' className='block w-full p-2 text-base border-[1px] border-gray-400 rounded-lg box-border' placeholder='John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
              
              />
            </div>
            <div className='mb-5'>
              <label className='block mb-2 font-bold'>Email</label>
              <input type='text' className='block w-full p-2 text-base border-[1px] border-gray-400 rounded-lg box-border' placeholder='JohnDoe@email.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <label className='block mb-2 font-bold'>Password</label>
              <input type='password' className='block w-full p-2 text-base border-[1px] border-gray-400 rounded-lg box-border' placeholder='*****'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <button className='p-2 text-base bg-green-600 text-white border-none rounded cursor-pointer' >Registrasi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register