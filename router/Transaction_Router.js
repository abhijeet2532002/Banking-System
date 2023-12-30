import express from 'express';
import Transaction_Db from '../controller/Transaction_Controller.js';
const router = express.Router();
const { createTransaction,
        getAllTransactionInfo,
        getOneTransactionInfo,
        updateTransactionInfo } = new Transaction_Db();

router.get('/',getAllTransactionInfo);
router.get('/:transactionNo',getOneTransactionInfo);
router.post('/create',createTransaction);
router.post('/update/:transactionNo',updateTransactionInfo);

export default router;