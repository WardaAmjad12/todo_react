const { listModel } = require("../mongodb/model");

const getLists = async () => {
    const lists = await listModel.find();
    return lists;
};
const createList = async (listPayload) => {
    const list = new listModel(listPayload);
    return list
        .save()
        .then((item) => {
            return item;
        })
        .catch((err) => {
            return err.message;
        });
};
const updateListById = async (listId, listPayload) => {
    const list = await listModel.updateOne({ _id: listId }, listPayload);
    return list;
};
const deleteListById = async (id) => {
    const list = await listModel.deleteOne({ _id: id })
    return list
}
const getListById = async (listId) => {
    const list = await listModel.findById(listId)
    return list
}
module.exports = { getLists, createList, deleteListById, updateListById , getListById}