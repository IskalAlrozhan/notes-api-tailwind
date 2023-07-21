import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'

const HeaderArchive = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between py-3'>
      <h1>Notes App</h1>
      <span>Selamat Datang {user.name}</span>
      <div className='flex items-center justify-between'>
        <button className='bg-gray-300 border-none rounded-2xl py-[5px] px-[10px] mr-1 cursor-pointer hover:bg-gray-200'  onClick={()=> navigate("/")}>
          Home
        </button>
      </div>
    </div>
  )
}

HeaderArchive.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  )
}

export default HeaderArchive