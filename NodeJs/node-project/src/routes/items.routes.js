import express from "express";

export const router = express.Router();

router.get('/', items.controller.getItems);
router.get('/:id', items.controller.getItem);
router.post('/', items.controller.createItem);
router.patch('/:id', items.controller.updateItem);
router.delete('/:id', items.controller.deleteItem);
router.delete('/', items.controller.deleteItems);