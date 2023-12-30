import express from "express";
const router = express.Router();
import CheckBook from '../controller/CheckBook_Controller.js';
const { createCheckBook, getOneCheckBook, getAllCheckBook, updateCheckBook } = new CheckBook();

router.get('/', getAllCheckBook);
router.get('/:checkNo', getOneCheckBook);
router.post('/create', createCheckBook);
router.post('/update/:checkNo', updateCheckBook);

export default router;