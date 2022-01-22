import ModalNoteDetails from './ModalNoteDetails'


export default function NotePreviewComponent(props) {

   

    return (
        <>
            <div className='card note-preview shadow-sm bg-white' >
                <div className='card-body'>
                    <h4 className='card-title'>{props.note.title}</h4>
                    <p className='card-text'>{props.note.description}</p>
                    {/* <p><Link to={`/notes/${props.note.id}`} className='card-link stretched-link' ></Link></p> */}
                    
                </div>
                <div className='card-footer'>
                        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.note.id}`}>
                            View
                        </button>
                    </div>
            </div>
            <ModalNoteDetails note={props.note} history={props.history}/>
        </>
        
    )
}