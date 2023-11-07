import express from 'express';
const router = express.Router();
import AccountController from '../controller/Account_Controller.js';
const Account = new AccountController();

router.get('/',Account.getAllAccount);
router.get('/:accountNo',Account.getAccount);
router.post('/create',Account.createAccount);

export default router;