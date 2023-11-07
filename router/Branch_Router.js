import express from 'express';
import Branch from '../controller/Branch_Controller.js';
const router = express.Router();
const branchController = new Branch();

router.get('/',branchController.getAllBranch);
router.get('/:branchCode',branchController.getBranch);
router.post('/create',branchController.createBranch);
router.post('/update/:branchCode',branchController.updateBranch);
router.get('/delete/:branchCode',branchController.deleteBranch);

export default router;