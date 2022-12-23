const { getTodos, updateTodoById, deleteTodoById, createTodo } = require("../services/todo");

const getAllTodos = async (req, res, next) => {
    try {
        let todos = await getTodos(req.query.listId);
        res.status(200).send({ data: todos })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
const updateTodo = async (req, res, next) => {
    try {
        let todoId = req.params.todoId;
        await updateTodoById(todoId, req.body).then(() => {
            res.status(200).send({
                data: 'Todo update successfully',

            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
const deleteTodo = async (req, res, next) => {
    try {
        let todoId = req.params.todoId;
        await deleteTodoById(todoId).then(() => {
            res.status(200).send({
                data: 'Todo delete successfully',
            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
// const getTodo = async (req, res, next) => {
//     try {
//         let listId = req.params.listId;
//         await getTodoById(listId).then((data) => {
//             res.status(200).send({
//                 message: 'Todo delete successfully',
//                 data:data
//             });
//         })

//     } catch (error) {
//         res.status(500).send('Something went wrong');
//     }
// }
const addTodo = async (req, res, next) => {
    try {
        console.log('req.body', req.body)
        let todo = {
            date:req.body.date,
            listId:req.body.listId,
            title:req.body.title,
            isMarked:req.body.isMarked
        }
        await createTodo(todo).then((data) => {
            res.status(200).send({
                message: 'Todo added successfully',
                data: data,
            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

module.exports = { getAllTodos, addTodo, updateTodo, deleteTodo }