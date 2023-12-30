import express from 'express';
const router = express.Router();
import Check_Type from '../controller/CheckBook_Type_Controller.js';

const { createCheckBookType, getOneCheckBookType, getAllCheckBookType, deleteCheckBookType,  updateCheckBookType } = new Check_Type();

router.get('/', getAllCheckBookType);
router.get('/:type', getOneCheckBookType);
router.post('/create', createCheckBookType);
router.post('/update/:type', updateCheckBookType);
router.get('/delete/:type', deleteCheckBookType);

export default router;