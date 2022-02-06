import {useState,useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import NoterService from '../api/NoterService'
import TagService from '../api/TagService'


export default function NewNoteComponent(props) {
    const [tags, setTags] = useState([])
    
    function submitForm(values) {
        const noteTags = []
        values.tagNames.map(tag => noteTags.push({name:tag}))
        console.log(noteTags)

        NoterService.addNote({title:values.title,description:values.description,tags:noteTags})
        .then(response => {
            props.history.push("/notes")
        })
    }

    const tagNames = []
    useEffect(() => {
        TagService.getAllTags()
        .then(response => {
            console.log(response.data)
            response.data.forEach(tag => {
                tagNames.push(tag.name)
            })
            console.log(tagNames)
            setTags(tagNames)
        })
    }, [])

    function validateValues(values) {
        const errors = {}
        if(!values.title) {
            errors.title = 'Required'
        }
        return errors
    }

    return(
        <div className='container p-3 col-8'>
            <h3>Add new note</h3>
            <Formik onSubmit={submitForm} initialValues={{title:'',description:'',tagNames:[]}} validate={validateValues}>
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
                            <button type='submit' className='btn btn-success mx-3'>Submit</button>
                        </div>
                        <div className='col-1'>
                            <button type='reset' className='btn btn-warning mx-4'>Reset</button>
                        </div>
                    
                    </div>
                    
                </Form>
            </Formik>
            
        </div>
    )
}