import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../component/Header'
import Noteslist from '../component/Noteslist'
import Search from '../component/Search'

const Home = () => {

  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate("/login")
    }

    getUser(accessToken);

  }, [navigate])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getNotes(accessToken);
  }, [notes])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getUser(accessToken);
  }, [user])



  // console.log("disini = ", user)

  const getNotes = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/notes', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setNotes(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }



  const getUser = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setUser(response.data.data)
      // console.log(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');

  const changeKey = (keyword) => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  }

  const filterNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword) ||
    note.body.toLowerCase().includes(keyword))


  return (
    <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 min-h-screen pb-1'>
      <Header user={user} />
      <Search keyword={keyword} keyChange={changeKey} />
      <Noteslist notes={filterNotes} />
    </div>
  )
}

export default Home