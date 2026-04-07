import { createOne, deleteAll, deleteOne, findAll, findOne, findOneAndUpdate } from "../repositories/items.repositories";

export async function getAllItems() {
    return findAll();
}

export async function getParticularItem(id) {
    const item = findOne(id);

    if(!item) {
        const error = new Error();
        error.message = "Item Not Found";
        error.status = 404;
        throw error;
    }
}

export async function createOneItem(data) {
    return createOne(data);
}

export async function updateParticularItem(id, data) {
    const item = findOneAndUpdate(id, data);

    if(!item) {
        const error = new Error();
        error.message = "Item Not Found";
        error.status = 404;
        throw error;
    }
}

export async function deleteParticularItem(id) {
    const item = deleteOne(id);

    if(!item) {
        const error = new Error();
        error.message = "Item Not Found";
        error.status = 404;
        throw error;
    }
}

export async function deleteAllItems() {
    return deleteAll();
}
