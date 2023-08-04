import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from './context/UserContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ArchiveNote from './pages/ArchiveNote';
import DetailNotes from './pages/DetailNotes'
import NotFound from './pages/NotFound';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Refresh halaman jika user berhasil login
  //   if (user !== null) {
  //     window.location.reload();
  //   }
  // }, [user]);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

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

    getUser(accessToken);
  }, [])

  

  if (user === null) {
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/Register' element={<Register />} />
            <Route path='/' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

    );
  } else {
    return (
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/ArchiveNote' element={<ArchiveNote />} />
            <Route path='/DetailNote/:id' element={<DetailNotes />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    );
  }

}

export default App;
