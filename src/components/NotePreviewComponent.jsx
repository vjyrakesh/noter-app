import {Link} from 'react-router-dom'


export default function NotePreviewComponent(props) {
    console.log(props)
    return (
        
        <div>
            <p>{props.note.title}</p>
            <p>{props.note.description}</p>
            <p><Link to={`/notes/${props.note.id}`}>More...</Link></p>
        </div>
    )
}