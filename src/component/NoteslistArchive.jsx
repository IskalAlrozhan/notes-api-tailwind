import PropTypes from 'prop-types'

import NoteArchive from './NoteArchive'

const NoteslistArchive = ({ notesarc }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[1rem]'>
      {notesarc.map((notearc) => (
        <NoteArchive key={notearc.id} id={notearc.id} title={notearc.title} body={notearc.body} />
      ))}
    </div>
  )
}

NoteslistArchive.propTypes = {
  notesarc: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ).isRequired
}

export default NoteslistArchive