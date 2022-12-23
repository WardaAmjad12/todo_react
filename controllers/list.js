const { getLists, createList, updateListById, deleteListById, getListById } = require("../services/list")

const getAllLists = async (req, res, next) => {
    try {
        let lists = await getLists();
        res.status(200).send({ data: lists })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
const updateList = async (req, res, next) => {
    try {
        let listId = req.params.listId;
        let list = {
            title: req.body.title
        }
        await updateListById(listId, list).then(() => {
            res.status(200).send({
                data: 'List update successfully',

            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
const deleteList = async (req, res, next) => {
    try {
        let listId = req.params.listId;
        await deleteListById(listId).then(() => {
            res.status(200).send({
                data: 'List delete successfully',
            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
const getList = async (req, res, next) => {
    try {
        let listId = req.params.listId;
        await getListById(listId).then((data) => {
            res.status(200).send({
                message: 'List delete successfully',
                data:data
            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}
const addList = async (req, res, next) => {
    try {
        await createList(req.body).then((data) => {
            res.status(200).send({
                message: 'List added successfully',
                data: data,
            });
        })

    } catch (error) {
        res.status(500).send('Something went wrong');
    }
}

module.exports = { getAllLists, addList, updateList, deleteList , getList }