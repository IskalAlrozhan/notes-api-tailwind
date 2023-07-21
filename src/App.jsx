// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ArchiveNote from './pages/ArchiveNote';
import DetailNotes from './pages/DetailNotes'
import NotFound from './pages/NotFound';

function App() {

  const accessToken = sessionStorage.getItem('accessToken');

  if (!accessToken) {
    return(
      <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ArchiveNote' element={<ArchiveNote />}/>
        <Route path='/DetailNote/:id' element={<DetailNotes />}/>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
