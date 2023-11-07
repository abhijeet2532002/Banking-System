import express from 'express';
import ATM_Type from "../controller/ATM_Type_Controller.js";
const router = express.Router();
const atmType = new ATM_Type();

router.get('/',atmType.get_All_ATM_Type);
router.get('/:type',atmType.get_ATM_Type);
router.post('/create',atmType.create_ATM_Type);
router.post('/update/:type',atmType.update_ATM_Type);
router.get('/delete/:type',atmType.delete_ATM_Type);

export default router;