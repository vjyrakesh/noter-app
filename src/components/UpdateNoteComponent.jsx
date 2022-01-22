import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NoterService from '../api/NoterService'
import TagService from '../api/TagService'

export default function UpdateNoteComponent(props) {
    const [note, setNote] = useState({title:'', description:'',tags:[]})
    const params = useParams()
    const [tags, setTags] = useState([])
    const tagNames = []
    
    function submitForm(values) {
        NoterService.updateNote(params.id, {title:values.title,description:values.description,tags:values.tagNames})
        .then(response => {
            props.history.push("/notes")
        })
    }

    useEffect(() => {

        // get the note
        NoterService.getOneNote(params.id)
        .then((response) => {
            console.log(response)
            setNote(response.data)
        })

        // get all tags
        TagService.getAllTags()
        .then(response => {
            console.log(response.data)
            response.data.forEach(tag => {
                tagNames.push(tag.name)
            })
            console.log(tagNames)
            setTags(tagNames)
        })
    },[params.id])

    
    function validateValues(values) {
        const errors = {}
        if(!values.title) {
            errors.title = 'Required'
        }
        return errors
    }

    return(
        <div className='container p-3 '>
            <h3>Update note</h3>
            <Formik onSubmit={submitForm} initialValues={{title:note.title,description:note.description,tagNames:note.tags}} validate={validateValues}  enableReinitialize={true}>
                <Form>
                    <div>
                        <ErrorMessage name='title' component='div'/>
                        <label htmlFor='title' className='form-label'>Title</label>
                        <Field name='title' type='text' className='form-control'/>
                    </div><br/>
                    <div>
                        <ErrorMessage name='description' component='div'/>
                        <label htmlFor='description' className='form-label'>Description</label>
                        <Field name='description' as='textarea' className='form-control'/><br/>
                    </div>
                    <div>
                        <label htmlFor='tagNames' className='form-label'>Tags</label>
                        <div className='row'>
                            <div className='col-2'>
                                <Field name='tagNames' as='select' multiple={true} className='form-select'>
                                {
                                    tags.map(tagName => <option value={tagName} key={tagName}>{tagName}</option>)
                                }
                                </Field>
                            </div>
                        </div>
                        
                        <div className='form-text'>
                            You can select multiple tags.
                        </div>
                    </div><br/>
                    <div className='row g-2'>
                        <div className='col-1'>
                            <button type='submit' className='btn btn-success'>Submit</button>
                        </div>
                        <div className='col-1'>
                            <button type='reset' className='btn btn-warning'>Reset</button>
                        </div>
                    
                    </div>
                    
                </Form>
            </Formik>
            
        </div>
    )    
}