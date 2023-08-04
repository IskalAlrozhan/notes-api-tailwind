import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext'

const Header = ({user}) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <div className='flex items-center justify-between py-3'>
      <h1>Notes App</h1>
      <span>Selamat Datang {user.name}</span>
      <div className='flex items-center justify-between'>
        <button className='bg-gray-300 border-none rounded-2xl py-[5px] px-[10px] mr-1 cursor-pointer hover:bg-gray-200' onClick={()=> navigate("/ArchiveNote")}>
          Archive
        </button>
        <button className='bg-gray-300 border-none rounded-2xl py-[5px] px-[10px] mr-1 cursor-pointer hover:bg-gray-200' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

Header.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  )
}

export default Header