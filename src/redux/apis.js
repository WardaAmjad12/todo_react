import axios from "axios"
const url = 'http://localhost:3000/'

// Get a list of lists
const getList = async () => {
    try {
        const res = await axios.get(`${url}lists`)
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// POST a list to axios.
const createList = async (list) => {
    try {
        const res = await axios.post(`${url}list`, list)
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// Updates a list.
const updateList = async (id, list) => {
    try {
        const res = await axios.post(`${url}list/${id}`, list)
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// Delete a list.
const deleteList = async (id) => {
    try {
        const res = await axios.delete(`${url}list/${id}`)
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// Get a list of todos.
const getTodos = async (listId) => {
    try {
        const res = await axios.get(`${url}todos`, { params: { listId: listId } })
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// Create a todo on a list.
const createTodo = async (listId, todo) => {
    try {
        const res = await axios.post(`${url}todo`, todo, { params: { listId: listId } })
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// Update a todo
const updateTodo = async (id, todo) => {
    try {
        const res = await axios.post(`${url}todo/${id}`, todo)
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
// Delete a to - do
const deleteTodo = async (id) => {
    try {
        const res = await axios.delete(`${url}todo/${id}`)
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error)
    }
}
const apis = { getList, createList, updateList, deleteList, getTodos, createTodo, updateTodo, deleteTodo };
export default apis