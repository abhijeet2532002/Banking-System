import Check_Type from "../model/Check_Type.js";
import MiddleWare from "../config/Middleware.js"

export default class CheckBook_Type {

    async createCheckBookType(req, res) {
        const responseMiddleware = new MiddleWare();
        try {
            responseMiddleware.returnFunction(res, await Check_Type.create(req.body));
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }
    m
    async getOneCheckBookType(req, res) {
        const responseMiddleware = new MiddleWare();
        try {
            responseMiddleware.returnFunction(res, await Check_Type.findOne({type: req.params.type}));
        } catch (error) {
            responseMiddleware.returnFunction(res, ["Abhijeet kumar",error]);
        }
    }

    async getAllCheckBookType(req, res) {
        const responseMiddleware = new MiddleWare();
        try {
            responseMiddleware.returnFunction(res, await Check_Type.find({}));
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }

    async deleteCheckBookType(req, res) {
        const responseMiddleware = new MiddleWare();
        try {
            const deleteCheckBookType = await Check_Type.findOneAndDelete({type: req.params.type});
            responseMiddleware.returnFunction(res, deleteCheckBookType);
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }

    async updateCheckBookType(req, res) {
        const responseMiddleware = new MiddleWare();
        try {
            responseMiddleware.returnFunction(res, await Check_Type.findOneAndUpdate({type: req.params.type}, req.body));
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }

}