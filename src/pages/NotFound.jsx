import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 5000);
  }, [navigate]);

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <h2 className='text-6xl text-blue-500 font-bold'>404: Not Found</h2>
    </div>
  )
}

export default NotFound