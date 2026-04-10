import { createOneItem, deleteAllItems, deleteParticularItem, getAllItems, getParticularItem, updateParticularItem } from "../services/items.service";

export async function getItems(req, res, next) {
    try {
        const items = await getAllItems();

        res.status(200).json({
            data: items
        });
    }
    catch(error) {
        next(error);
    }
}

export async function getItem(req, res, next) {
    try {
        const id = Number(req.params.id);
        const item = await getParticularItem(id);

        res.status(200).json({
            data: item
        });
    }
    catch(error) {
        next(error);
    }
}

export async function createItem(req, res, next) {
    try {
        const response = await createOneItem(req.data);

        res.status(201).json({
            data: response
        });
    }
    catch(error) {
        next(error);
    }
}

export async function updateItem(req, res, next) {
    try {
        const id = Number(req.params.id);
        const item = await updateParticularItem(id, req.body);

        res.status(200).json({
            data: item
        });
    }
    catch(error) {
        next(error);
    }
}

export async function deleteItems(req, res, next) {
    try {
        const response = await deleteAllItems(id);

        res.status(204).json({
            data: response
        });
    }
    catch(error) {
        next(error);
    }
}

export async function deleteItem(req, res, next) {
    try {
        const id = Number(req.params.id);
        const response = await deleteParticularItem(id);
        
        res.status(204).json({
            data: response
        });
    }
    catch(error) {
        next(error);
    }
}
