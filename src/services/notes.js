import API from './api'

const NoteService = {
    index: () => API.get("/notes", {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    create: () => API.post("/notes",{'title': "Nova Nota",'body': 'Nova Nota....'}, {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    
}

export default NoteService