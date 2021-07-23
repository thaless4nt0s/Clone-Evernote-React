import API from './api'

const NoteService = {
    index: () => API.get("/notes", {
        headers: { 'x-access-token': localStorage.getItem('token') }
    }),
    create: () => API.post("/notes", { 'title': "Nova Nota", 'body': 'Nova Nota....' }, {
        headers: { 'x-access-token': localStorage.getItem('token') }
    }),
    delete: (id) => API.delete(`/notes/${id}`, {
        headers: { 'x-access-token': localStorage.getItem('token') }
    }),
    update: (id, params) => API.put(`/notes/${id}`, params, {
        headers: { 'x-access-token': localStorage.getItem('token') }
    }),
    search: (query) => API.get(`/notes/search?query=${query}`, {
        headers: { 'x-access-token': localStorage.getItem('token') }
    }),
}

export default NoteService