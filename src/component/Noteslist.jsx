import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const Noteslist = ( {notes} ) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[1rem]'>
      {notes.map((note)=> (
        <Note key={note.id} id={note.id} title={note.title} body={note.body}/>
      ))}
      <AddNote />
    </div>
  )
}

export default Noteslist