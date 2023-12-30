import Checkbook from '../model/Cheack_Book.js';
import Middleware from '../config/Middleware.js';
import CheckType from '../model/Check_Type.js';
import Account from '../model/Account.js';

export default class CheckBook {
    async createCheckBook(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const Check_Type = await CheckType.findById(req.body.name);
            if (Check_Type) {
                const AccountInfo = await Account.findById(req.body.acount);
                if (AccountInfo) {
                    const checkNo = responseMiddleware.generateUniqueId(26, 'hex');
                    const ending_Page = req.body.starting_page + req.body.pages;
                    const Check_Book = await Checkbook.create({ checkNo: checkNo, ...req.body, ending_Page: ending_Page });

                    AccountInfo.check = Check_Book;
                    AccountInfo.save();

                    Check_Type.check.push(Check_Book);
                    Check_Type.save();

                    responseMiddleware.returnFunction(res, [Check_Book, AccountInfo, Check_Type]);
                } else
                    responseMiddleware.returnFunction(res, ["Account not found", Check_Type]);
            } else
                responseMiddleware.returnFunction(res, "check type is not found ")
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }

    async getOneCheckBook(req, res) {
        const responseMiddleware = new Middleware();
        try {
            responseMiddleware.returnFunction(res, await Checkbook.findOne({ checkNo: req.params.checkNo })
                .populate('name')
                .populate({
                    path: 'acount', populate: {
                        path: 'user'
                    }
                })
            );
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }

    async getAllCheckBook(req, res) {
        const responseMiddleware = new Middleware();
        try {
            responseMiddleware.returnFunction(res, await Checkbook.find({})
                .populate('name')
                .populate({
                    path: 'acount', populate: {
                        path: 'user'
                    }
                })
            );
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }

    async updateCheckBook(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const updateCheckBook = await Checkbook.findOneAndUpdate({ checkNo: req.params.checkNo }, req.body);
            responseMiddleware.returnFunction(res,updateCheckBook);
        } catch (error) {
            responseMiddleware.returnFunction(res, error);
        }
    }
}