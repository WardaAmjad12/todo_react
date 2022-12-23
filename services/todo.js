const { todoModel } = require("../mongodb/model");

const getTodos = async (listId) => {
    let pipeline = [];

    pipeline.push(
        { $match: { listId: listId } },
    )
    const todos = await todoModel.aggregate(pipeline);
    return todos;
};
const createTodo = async (todoPayload) => {
    const todo = new todoModel(todoPayload);
    return todo
        .save()
        .then((item) => {
            return item;
        })
        .catch((err) => {
            return err.message;
        });
};
const updateTodoById = async (todoId, todoPayload) => {
    const todo = await todoModel.updateOne({ _id: todoId }, todoPayload);
    return todo;
};
const deleteTodoById = async (id) => {
    const todo = await todoModel.deleteOne({ _id: id })
    return todo
}
const getTodoById = async (todoId) => {
    const todo = await todoModel.findById(todoId)
    return todo
}
module.exports = { getTodos, createTodo, deleteTodoById, updateTodoById, getTodoById }