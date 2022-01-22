import {useState, useEffect} from 'react'
import NoterService from "../api/NoterService"
import NotePreviewComponent from "./NotePreviewComponent"

export default function NoteListComponent(props) {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        NoterService.getAllNotes()
        .then(response => {
            console.log(response)
            setNotes(response.data)
        })
    },[])

    return (
        <div className='container d-flex my-3'>
            {
                notes.map(
                    note => <NotePreviewComponent note={note} key={note.id} history={props.history}/>)
            }
        </div>
    )
}