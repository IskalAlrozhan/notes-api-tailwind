import axios from 'axios';
import React from 'react'
import { MdDeleteForever, MdArchive, MdOpenInFull } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Note = ({ id, title, body }) => {

  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('accessToken');

  const handleArchive = async () => {
    try {
      const response = await axios.post(`https://notes-api.dicoding.dev/v1/notes/${id}/archive`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      });

      console.log(response.data);

    } catch (error) {
      console.log('Error:', error.response.data);
    }
  };

  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete(`https://notes-api.dicoding.dev/v1/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

  <div className='flex bg-yellow-300 rounded-[10px] p-4 min-h-[170px] flex-col justify-between whitespace-pre-wrap' key={id}>
    <div className='flex flex-col'>
      <span style={{ marginBottom: '5px', borderBottom: '1px solid grey' }}>{title}</span>

      <span>{body}</span>
    </div>

    <div className='flex justify-end items-end'>
      <MdArchive className='cursor-pointer hover:text-amber-950' size='1.3em' onClick={handleArchive} />
      <MdDeleteForever className='cursor-pointer hover:text-amber-950' size='1.3em' onClick={handleDeleteNote} />
      <MdOpenInFull className='cursor-pointer hover:text-amber-950' size='1.3em' onClick={()=> navigate(`/DetailNote/${id}`)}/>
    </div>
  </div>
  )
}

export default Note