import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        email,
        password
      };

      const requestBodyString = JSON.stringify(requestBody);

      const response = await axios.post('https://notes-api.dicoding.dev/v1/login', requestBodyString, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // console.log(response.data.data.accessToken)
      const accessToken = response.data.data.accessToken
      localStorage.setItem('accessToken', accessToken);
      window.location.reload();

    } catch (error) {
      console.log("Error saat melakukan registrasi:", error.response.data.message);
    }
  }

  return (
    <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 min-h-screen'>
      <div className='flex justify-center items-center h-screen'>
        <div className='max-w-md m-[0 auto] p-5 bg-gray-200 border-[1px] border-gray-400 rounded-lg'>
          <h1 className='text-center mb-5'>User Login</h1>
          <form onSubmit={Auth} className='login-form'>
            <div className='mb-5'>
              <label className='block mb-2 font-bold'>Email</label>
              <input type='text' className='block w-full p-2 text-base border-[1px] border-gray-400 rounded-lg box-border' placeholder='Email'
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
            {/* <div>
              {msg}
            </div> */}
            <div className='mb-5'>
              <button className='p-2 text-base bg-green-600 text-white border-none rounded cursor-pointer'>Login</button>
            </div>
          </form>
          <div>
            <button className='p-2 text-base bg-green-600 text-white border-none rounded cursor-pointer'
              onClick={() => navigate("/Register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login