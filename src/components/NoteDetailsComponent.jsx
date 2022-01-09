import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import NoterService from '../api/NoterService'
import moment from 'moment'

export default function NoteDetailsComponent() {
    const [note, setNote] = useState({tags:[]})
    const params = useParams()

    useEffect(() => {
        NoterService.getOneNote(params.id)
        .then(response => {
            console.log(response)
            setNote(response.data)
        })
    }, [])
    return (
        <div>
            <p>{note.title}</p>
            <p>{note.description}</p>
            <p>Last updated at: {moment(note.lastUpdatedAt).format('YYYY-MM-DD HH:MM:SS')}</p>
            <div>
                {
                    note.tags.map(tag => 
                        <Link to={`/tags/${tag.id}`} key={tag.id}>{tag.name}</Link>    
                    )
                }
            </div>
        </div>
    )
}