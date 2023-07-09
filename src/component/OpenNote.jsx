import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const OpenNote = () => {

    const [notes, setNotes] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        getNotes(accessToken);
    }, [notes])

    const getNotes = async (accessToken) => {
        try {
            const response = await axios.get(`https://notes-api.dicoding.dev/v1/notes/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })

            setNotes(response.data.data)

        } catch (error) {
            console.log("errornya adalah =", error.response.data)
        }
    }

    const { title, body } = notes;

    console.log(notes);

    return (
        <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 min-h-screen'>
            <div className='flex bg-yellow-300 rounded-[10px] p-4 min-h-[170px] flex-col justify-between whitespace-pre-wrap'>
                <div className='text-lg font-bold border-b-2 border-gray-400'>{title}</div>
                <div>{body}</div>
            </div>
        </div>

    )
}

export default OpenNote