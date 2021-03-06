import axios from 'axios'

class NoterService {
    getAllNotes() {
        return axios.get("http://localhost:8080/notes")
    }

    getOneNote(id) {
        return axios.get(`http://localhost:8080/notes/${id}`)
    }

    addNote(note) {
        return axios.post("http://localhost:8080/notes", note)
    }

    updateNote(id, note) {
        return axios.put(`http://localhost:8080/notes/${id}`, note)
    }

    deleteNote(id) {
        return axios.delete(`http://localhost:8080/notes/${id}`)
    }
}

export default new NoterService()