import {useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import TagService from '../api/TagService'

export default function TagListComponent() {
    const [tags, setTags] = useState([])
    
    const tagNames = []
    useEffect(() => {
        TagService.getAllTags()
        .then(response => {
            response.data.forEach(tag => {
                tagNames.push(tag.name)
            })
            setTags(tagNames)
        })
    }, [])

    return (
        <div className='my-4'>
            <h4>Tags</h4>
            
                <div className="list-group">
                    {
                        tags.map(tag => <Link className="list-group-item list-group-item-action"  to={`/tags/${tag}`} key={tag}>{tag}</Link>)
                    }
                </div>

            
        </div>
    )
}