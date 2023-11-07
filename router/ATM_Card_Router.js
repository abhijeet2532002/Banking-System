import express from 'express';
const router = express.Router();

import ATM_Card from '../controller/ATM_Card_Controller.js';
const ATM = new ATM_Card();

router.get('/',ATM.get_All_ATM_Card);
router.get('/:ATM_NO',ATM.get_ATM_Card);
router.post('/create',ATM.create_ATM_Card);
router.get('/delete/:ATM_NO',ATM.delete_ATM_Card);
router.post('/update/:ATM_NO',ATM.update_ATM_Card);

export default router;