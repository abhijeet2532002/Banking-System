import express from 'express';
import location from "../controller/Location_Controller.js";
const router = express.Router();

const Location = new location();
router.get('/',Location.getAllLocation);
router.get('/:pincode',Location.getLocation);
router.post('/create',Location.createLocation);
router.post('/update/:pincode',Location.updateLocation);
router.get('/delete/:pincode',Location.deleteLocation);

export default router;