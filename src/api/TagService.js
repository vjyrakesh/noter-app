import axios from "axios"

class TagService {
    getOneTag(id) {
        return axios.get(`http://localhost:8080/tags/${id}`)
    }

    getNotesOfTag(name) {
        return axios.get(`http://localhost:8080/tags/${name}/notes`)
    }

    getAllTags() {
        return axios.get("http://localhost:8080/tags")
    }
}

export default new TagService()