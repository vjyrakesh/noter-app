import {useState,useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import NoterService from '../api/NoterService'
import TagService from '../api/TagService'


export default function NewNoteComponent(props) {
    const [tags, setTags] = useState([])
    
    function submitForm(values) {
        alert(JSON.stringify(values, null, 2))
        const noteTags = []
        values.tagNames.map(tag => noteTags.push({name:tag}))
        console.log(noteTags)

        NoterService.addNote({title:values.title,description:values.description,tags:noteTags})
        .then(response => {
            console.log("Note added successfully")
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
        <div>
            New Note
            <Formik onSubmit={submitForm} initialValues={{title:'',description:'',tagNames:[]}} validate={validateValues}>
                <Form>
                    <ErrorMessage name='title' component='div'/>
                    <label htmlFor='title'>Title</label>
                    <Field name='title' type='text'/>
                    <ErrorMessage name='description' component='div'/>
                    <label htmlFor='description'>Description</label>
                    <Field name='description' as='textarea'/><br/>
                    <Field name='tagNames' as='select' multiple={true}>
                        {
                            tags.map(tagName => <option value={tagName} key={tagName}>{tagName}</option>)
                        }
                    </Field>
                    
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            
        </div>
    )
}