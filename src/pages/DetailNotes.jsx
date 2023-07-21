import { useEffect, useState } from 'react'
import axios from 'axios';
import OpenNote from '../component/OpenNote'
import HeaderArchive from '../component/HeaderArchive';

const DetailNotes = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getUser(accessToken);
  }, [user])

  const getUser = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setUser(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }

  return (
    <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 pb-1 min-h-screen'>
      <HeaderArchive user={user} />
      <OpenNote />
    </div>
  )
}

export default DetailNotes