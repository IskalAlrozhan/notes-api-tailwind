import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import UserContext from '../context/UserContext';

import HeaderArchive from '../component/HeaderArchive'
import NoteslistArchive from '../component/NoteslistArchive'

const ArchiveNote = () => {
  const { user } = useContext(UserContext);
  const [notesarc, setNotesarc] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    getNotesArchive(accessToken);
  }, [notesarc])

  const getNotesArchive = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/notes/archived', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setNotesarc(response.data.data)
      // console.log(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }

  return (
    <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 min-h-screen'>
      <HeaderArchive user={user}/>
      <NoteslistArchive notesarc={notesarc}/>
    </div>
  )
}

export default ArchiveNote