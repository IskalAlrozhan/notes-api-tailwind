import PropTypes from 'prop-types';
import axios from 'axios';
import { MdDeleteForever, MdUnarchive } from 'react-icons/md'

const NoteArchive = ({ id, title, body }) => {

  const accessToken = localStorage.getItem('accessToken');

  const handleUnarchive = async () => {
    try {
      const response = await axios.post(`https://notes-api.dicoding.dev/v1/notes/${id}/unarchive`, {}, {
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
        <MdUnarchive className='cursor-pointer hover:text-amber-950' size='1.3em' onClick={handleUnarchive} />
        <MdDeleteForever className='cursor-pointer hover:text-amber-950' size='1.3em' onClick={handleDeleteNote} />
      </div>
    </div>
  )
}

NoteArchive.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default NoteArchive