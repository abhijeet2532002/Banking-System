import express from 'express';
import Customer from './Customer_Router.js';
import Account from './Account_Router.js';
import Branch from './Branch_Router.js';
import Location from './Location_Router.js';
import AccountType from './Account_Type_Router.js';
import ATM_Type from './ATM_Type_Router.js';
import ATM_Card from './ATM_Card_Router.js';
import Check_Type from './Check_Type_Router.js';
import Check_Book from './Check_Book_Router.js';
import Transaction from './Transaction_Router.js';

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use('/location', Location); // Working Properly
router.use('/branch', Branch); // Working Correctly
router.use('/accountType', AccountType); // in Working state
router.use('/customer', Customer);
router.use('/account', Account);
router.use('/atm_type', ATM_Type); //working State
router.use('/atm_card', ATM_Card); 
router.use('/check_type', Check_Type); 
router.use('/check_book', Check_Book);
router.use('/transaction',Transaction);

export default router;