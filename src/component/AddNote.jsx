import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNote = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate("/login")
    } else {
      setAccessToken(accessToken);
    }

  }, [])

  const CreateNote = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        title: title,
        body: body
      };

      // const requestBodyString = JSON.stringify(requestBody);

      const response = await axios.post('https://notes-api.dicoding.dev/v1/notes', requestBody, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      console.log(response)

    } catch (error) {
      console.log("Error saat menambahkan note:", error.response.data);
      console.log(title)
      console.log(body)
    }
  }

  return (
    <div className='flex bg-teal-400 rounded-[10px] p-4 min-h-[170px] flex-col justify-between whitespace-pre-wrap'>
      <textarea
        className='border-none resize-none bg-teal-400 focus:outline-none'
        rows="1"
        cols="10"
        placeholder='masukin title bro'
        style={{ marginBottom: '5px', borderBottom: '1px solid grey' }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      >
      </textarea>

      <textarea
        className='border-none resize-none bg-teal-400 focus:outline-none'
        rows="8"
        cols="10"
        placeholder='masukin teks bro'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      >

      </textarea>
      <div className='flex justify-end items-end'>
        <button className='bg-gray-300 border-none rounded-2xl py-[5px] px-[10px] cursor-pointer hover:bg-gray-200' onClick={CreateNote}>Save</button>
      </div>
    </div>
  )
}

export default AddNote