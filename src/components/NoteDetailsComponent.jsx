import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NoterService from '../api/NoterService'
import moment from 'moment'

export default function NoteDetailsComponent(props) {
    const [note, setNote] = useState({tags:[]})
    const params = useParams()

    useEffect(() => {
        NoterService.getOneNote(params.id)
        .then(response => {
            console.log(response)
            setNote(response.data)
        })
    }, [params.id])

    function handleClose() {
        props.history.push("/notes")
    }
    return (
        <div className='card one-note p-3 my-3'>
            <div className='card-body'>
                <button type="button" className='btn-close close-button' onClick={handleClose}></button>
                <h4 className='card-title'>{note.title}</h4>
                <p className='card-text'>{note.description}</p>
                <p className='card-text'>Last updated at: {moment(note.lastUpdatedAt).format('YYYY-MM-DD HH:MM:SS')}</p>
                <div> Tags: 
                    {
                        note.tags.map(tag => 
                            <Link to={`/tags/${tag.id}`} key={tag.id} className='card-link'>{tag.name}</Link>    
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}