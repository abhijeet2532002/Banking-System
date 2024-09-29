import ATM_Type from "../model/ATM_Type.js";
import Middleware from "../config/Middleware.js"

export default class ATM_Type_Controller {
    async create_ATM_Type(req, res) {
        const returnMiddleware = new Middleware();
        try {
            const atmType = await ATM_Type.findOne({type : req.body.type}); 
            if(!atmType) 
                returnMiddleware.returnFunction(res,await ATM_Type.create(req.body));
            else
                returnMiddleware.returnFunction(res,atmType);
        } catch (error) {
            returnMiddleware.returnFunction(res,error);
        }
    }

    async get_ATM_Type(req, res) {
        const returnMiddleware = new Middleware();
        try {
            const atmType = await ATM_Type.findOne({type : req.params.type});
            returnMiddleware.returnFunction(res,atmType);
        } catch (error) {
            returnMiddleware.returnFunction(res,error);
        }
    }

    async get_All_ATM_Type(req, res) {
        const returnMiddleware = new Middleware();
        try {
            const atmType = await ATM_Type.find({});
            returnMiddleware.returnFunction(res,atmType);
        } catch (error) {
            returnMiddleware.returnFunction(res,error);
        }
    }

    async delete_ATM_Type(req, res) {
        const returnMiddleware = new Middleware();
        try {
            const atmType = await ATM_Type.findOneAndDelete({ type: req.params.type });
            returnMiddleware.returnFunction(res,atmType);
        } catch (error) {
            returnMiddleware.returnFunction(res,error);
        }
    }

    async update_ATM_Type(req, res) {
        const returnMiddleware = new Middleware();
        try {
            const atmType = await ATM_Type.findOneAndUpdate({ type: req.params.type }, req.body, { new: true });
            returnMiddleware.returnFunction(res,atmType);
        } catch (error) {
            returnMiddleware.returnFunction(res,error);
        }
    }

}