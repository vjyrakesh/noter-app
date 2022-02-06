import {useState, useEffect} from 'react'
import NoterService from "../api/NoterService"
import NotePreviewComponent from "./NotePreviewComponent"
import TagListComponent from './TagListComponent'

export default function NoteListComponent(props) {
    const [notes, setNotes] = useState([])
    const [reRender, setReRender] = useState(false)
    
    useEffect(() => {
        NoterService.getAllNotes()
        .then(response => {
            console.log(response)
            setNotes(response.data)
        })
    },[reRender])

    function shouldReRender() {
        console.log("re render called")
        if(reRender === false)
            setReRender(true)
        else
            setReRender(false)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-2">
                    <TagListComponent/>
                </div>
                <div className="col-10">
                    <div className='container d-flex my-3'>
                    {
                        notes.map(note => <NotePreviewComponent note={note} key={note.id} history={props.history} reRender={shouldReRender}/>)
                    }
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}