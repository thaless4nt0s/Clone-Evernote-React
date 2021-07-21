import API from './api'
const UsersService = {
    register: (params) => API.post('/users/register', params)
}

export default UsersService