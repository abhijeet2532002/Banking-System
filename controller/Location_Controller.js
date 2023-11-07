import location from "../db/Location.js";
import Middleware from '../config/Middleware.js';

export default class LocationController {

    async createLocation(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const locationFound = await location.findOne({ pincode: req.body.pincode });
            if (!locationFound)
                responseMiddleware.returnFunction(res, await location.create(req.body));
            else
                responseMiddleware.returnFunction(res, locationCreate);

        } catch (error) {
            responseMiddleware.returnFunction(res, ["Location not create", error]);
        }
    }

    async getLocation(req, res) {
        const responseMiddleware = new Middleware();
        try {
            responseMiddleware.returnFunction(res, await location.findOne({ pincode: req.params.pincode }).populate('branch'));
        } catch (error) {
            responseMiddleware.returnFunction(res, ["Location not create", error]);
        }
    }

    async getAllLocation(req, res) {
        const responseMiddleware = new Middleware();
        try {
            responseMiddleware.returnFunction(res, await location.find({}).populate({
                path: 'branch',
                populate: {
                    path: 'customer',
                    populate: {
                        path: 'account',
                    }
                }
            }));
        } catch (error) {
            responseMiddleware.returnFunction(res, ["Location not create", error]);
        }
    }

    async deleteLocation(req, res) {
        const responseMiddleware = new Middleware();
        try {
            responseMiddleware.returnFunction(res, await location.findOneAndDelete({ pincode: req.params.pincode }));
        } catch (error) {
            responseMiddleware.returnFunction(res, ["Location not create", error]);
        }
    }

    async updateLocation(req, res) {
        const responseMiddleware = new Middleware();
        try {
            responseMiddleware.returnFunction(res, await location.findOneAndUpdate({ pincode: req.params.pincode }, req.body));
        } catch (error) {
            responseMiddleware.returnFunction(res, ["Location not create", error]);
        }
    }
}