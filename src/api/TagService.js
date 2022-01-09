import axios from "axios"

class TagService {
    getOneTag(id) {
        return axios.get(`http://localhost:8080/tags/${id}`)
    }

    getNotesOfTag(name) {
        return axios.get(`http://localhost:8080/tags/${name}/notes`)
    }
}

export default new TagService()