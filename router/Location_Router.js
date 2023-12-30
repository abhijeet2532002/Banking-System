import express from 'express';
import location from "../controller/Location_Controller.js";

const router = express.Router();

const {getLocation, getAllLocation ,createLocation, deleteLocation,updateLocation} = new location();

router.get('/',getAllLocation);
router.get('/:pincode',getLocation);
router.post('/create',createLocation);
router.post('/update/:pincode',updateLocation);
router.get('/delete/:pincode',deleteLocation);

export default router;