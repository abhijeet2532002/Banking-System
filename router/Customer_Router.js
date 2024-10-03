import express from 'express';
const router = express.Router();
import CustomerController from '../controller/Customer_Controller.js';
const Customer = new CustomerController();

router.get('/', Customer.getAllCustomer);
router.get('/:email', Customer.getCustomer);
router.post('/create', Customer.createCustomer);
router.get('/delete/:email', Customer.deleteCustomer);
router.post('/update/:email', Customer.updateCustomer);

export default router;