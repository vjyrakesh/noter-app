import moment from 'moment'


export default function ModalNoteDetails(props) {

    

    return (
        <div className="modal fade" id={`exampleModal${props.note.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.note.title}</h5>
                    
                </div>
                <div className="modal-body">
                    <p>{props.note.description}</p>
                    <p>Last updated at: {moment(props.note.updatedAt).format('YYYY-MM-DD HH:MM:SS')}</p>
                    <div> Tags: 
                        <span>&nbsp;{props.note.tags.join(', ')}</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}