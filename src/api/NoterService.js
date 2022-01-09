import axios from 'axios'

class NoterService {
    getAllNotes() {
        return axios.get("http://localhost:8080/notes")
    }

    getOneNote(id) {
        return axios.get(`http://localhost:8080/notes/${id}`)
    }
}

export default new NoterService()