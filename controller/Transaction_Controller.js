import Account from "../model/Account.js";
import Transaction from "../model/Transaction.js";
import Branch from "../model/Branch.js";
import ATM_Machine from "../model/ATM_Machine.js";
import ATM from "../model/ATM_Card.js";
import Middleware from "../config/Middleware.js";

export default class Transaction_Controller {
    async createTransaction(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const code = req.query.code;
            const method = req.query.method;
            const type = req.body.type;
            const amount = req.body.amount;
            let transactionStatus = req.body.status;

            if (code === "Branch") {
                const branchInfo = await Branch.findOne({ branchCode: req.body.code });
                if (branchInfo && (method == "Account" || method == "ATM")) {
                    if (method == "Account") {
                        const accountInfo = await Account.findById(req.body.method);
                        if (accountInfo) {
                            if (type == "Withdrawal") {
                                if ((accountInfo.balance - amount) > 0) {
                                    accountInfo.balance = accountInfo.balance - amount;
                                    transactionStatus = "Success";
                                } else
                                    transactionStatus = "Cancel";
                            } else {
                                transactionStatus = 'Success',
                                    accountInfo.balance = accountInfo.balance + amount;
                            }

                            const transactionInfo = await Transaction.create({ ...req.body, status: transactionStatus });
                            accountInfo.transaction.push(transactionInfo);
                            accountInfo.save();
                            return responseMiddleware.returnFunction(res, transactionInfo);
                        } else {
                            responseMiddleware.returnFunction(res, [branchInfo, "Account not founded"]);
                        }
                    } else {
                        const ATMInfo = await ATM.findById(req.body.method);
                        if (ATMInfo) {
                            if (type == "Withdrawal") {
                                console.log("Abhijeet kumar");
                                const accountInfo = await Account.findById(ATMInfo.account);
                                if ((accountInfo.balance - amount) > 0) {
                                    accountInfo.balance = accountInfo.balance - amount;
                                    transactionStatus = "Success";
                                } else
                                    transactionStatus = "Cancel";
                                console.log(accountInfo)
                                accountInfo.save();
                                const transactionInfo = await Transaction.create({ ...req.body, status: transactionStatus });
                                ATMInfo.transaction.push(transactionInfo);
                                ATMInfo.save();
                                responseMiddleware.returnFunction(res, transactionInfo);
                            } else {
                                console.log("Shubham");
                            }
                        } else {
                            responseMiddleware.returnFunction(res, [branchInfo, "Account not founded"]);
                        }
                    }
                }
                else
                    responseMiddleware.returnFunction(res, "Branch not found or incorrect method ");
            } else {
                responseMiddleware.returnFunction(res, [req.body, req.query]);
            }
        } catch (error) {
            responseMiddleware.returnFunction(res, ['Something issue founded', error]);
        }
    }

    async getOneTransactionInfo(req, res) {
        const responseMiddleware = new Middleware();
        try {

        } catch (error) {
            responseMiddleware.returnFunction(res, ['Something issue founded', error]);
        }
    }

    async getAllTransactionInfo(req, res) {
        const responseMiddleware = new Middleware();
        try {
            return responseMiddleware.returnFunction(res, await Transaction.find({}));
        } catch (error) {
            responseMiddleware.returnFunction(res, ['Something issue founded', error]);
        }
    }

    async updateTransactionInfo(req, res) {
        const responseMiddleware = new Middleware();
        try {

        } catch (error) {
            responseMiddleware.returnFunction(res, ['Something issue founded', error]);
        }
    }
}