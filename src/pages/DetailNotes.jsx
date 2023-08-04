import { useContext } from 'react'

import OpenNote from '../component/OpenNote'
import HeaderArchive from '../component/HeaderArchive';
import UserContext from '../context/UserContext';

const DetailNotes = () => {
  const { user } = useContext(UserContext);
 
  return (
    <div className='max-w-[960px] mr-auto ml-auto pr-4 pl-4 pb-1 min-h-screen'>
      <HeaderArchive user={user} />
      <OpenNote />
    </div>
  )
}

export default DetailNotes