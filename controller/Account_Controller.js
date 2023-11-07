import Account from '../db/Account.js';
import Middleware from '../config/Middleware.js';
import Customer from '../db/Customer.js';

export default class AccountController {
    async createAccount(req, res) {
        const returnMiddleWare = new Middleware();
        try {
            const customer = await Customer.findOne({
                _id: req.body.user,
                branch: req.body.branch
            })

            const accountNo = returnMiddleWare.generateUniqueId(10);
            if (customer) {
                const account = await Account.create({ accountNo: accountNo, ...req.body });
                customer.account = account;
                customer.save();
                returnMiddleWare.returnFunction(res, [account, customer]);
            } else
                returnMiddleWare.returnFunction(res, "Customer Or Branch Is Not Founded ...");
        } catch (error) {
            returnMiddleWare.returnFunction(res, ["Somethings error during account create ...", error]);
        }
    }

    async getAccount(req,res) {
        const returnMiddle = new Middleware();
        try {
            returnMiddle.returnFunction(res, await Account.findOne({accountNo: req.params.accountNo}));
        } catch (error) {
            returnMiddle.returnFunction(res,error);
        }
    }

    async getAllAccount(req, res) {
        const returnMiddle = new Middleware();
        try {
            returnMiddle.returnFunction(res, await Account.find({}).populate('type'));
        } catch (error) {
            returnMiddle.returnFunction(res, error);
        }
    }
    
}