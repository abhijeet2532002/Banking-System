import express from 'express';
import AccountType from '../controller/Account_Type_Controller.js';
const router = express.Router();
const accountType = new AccountType();

router.get('/:type',accountType.getAccountType);
router.get('/',accountType.getAllAccountType);
router.post('/create',accountType.createAccountType);
router.post('/update/:type',accountType.updateAccountType);
router.get('/delete/:type',accountType.deleteAccountType);

export default router;