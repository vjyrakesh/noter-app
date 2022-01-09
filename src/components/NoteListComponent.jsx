import {useState, useEffect} from 'react'
import NoterService from "../api/NoterService"
import NotePreviewComponent from "./NotePreviewComponent"

export default function NoteListComponent() {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        NoterService.getAllNotes()
        .then(response => {
            console.log(response)
            setNotes(response.data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    notes.map(
                        note =>
                        <li key={note.id}>
                            <NotePreviewComponent note={note}/>
                        </li> 
                    )
                }
            </ul>
        </div>
    )
}