import express from 'express';
import Customer from './Customer_Router.js';
import Account from './Account_Router.js';
import Branch from './Branch_Router.js';
import Location from './Location_Router.js';
import AccountType from './Account_Type_Router.js';
import ATM_Type from './ATM_Type_Router.js';
import ATM_Card from './ATM_Card_Router.js'

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use('/location',Location);
router.use('/branch',Branch);
router.use('/accountType',AccountType);
router.use('/customer',Customer);
router.use('/account',Account);
router.use('/atm_type',ATM_Type);
router.use('/atm_card',ATM_Card);

export default router;