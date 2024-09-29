import Account from '../model/Account.js';
import ATM_Type from '../model/ATM_Type.js';
import ATM_Card from '../model/ATM_Card.js';
import MiddleWare from '../config/Middleware.js';

export default class ATMCard {
    async create_ATM_Card(req, res) {
        const returnMiddleware = new MiddleWare();
        try {
            const cardData = {
                ATM_NO: returnMiddleware.generateUniqueId(16),
                CSV: returnMiddleware.generateUniqueId(3)
            }

            const account = await Account.findById(req.body.account);

            if (account) {
                const cardType = await ATM_Type.findById(req.body.type);
                if (cardType) {
                    const ATM = await ATM_Card.create({ ...cardData, ...req.body });

                    cardType.ATM.push(ATM);
                    cardType.save();

                    account.ATM.push(ATM);
                    account.save();

                    returnMiddleware.returnFunction(res, ATM);
                }
                else {
                    returnMiddleware.returnFunction(res, ["Card type not founded", account]);
                }
            } else {
                returnMiddleware.returnFunction(res, "Account No not founded");
            }
        } catch (error) {
            console.log(error);
            returnMiddleware.returnFunction(res, [error]);
        }
    }

    async get_ATM_Card(req, res) {
        const returnMiddleware = new MiddleWare();
        try {
            returnMiddleware.returnFunction(res, await ATM_Card.findOne({ ATM_NO: req.params.ATM_NO }).populate('account').populate('type'));
        } catch (error) {
            returnMiddleware.returnFunction(res, error);
        }
    }

    async get_All_ATM_Card(req, res) {
        const returnMiddleware = new MiddleWare();
        try {
            returnMiddleware.returnFunction(res, await ATM_Card.find({}).populate('account').populate('type'));
        } catch (error) {
            returnMiddleware.returnFunction(res, error);
        }
    }

    async delete_ATM_Card(req, res) {
        const returnMiddleware = new MiddleWare();
        try {

        } catch (error) {
            returnMiddleware.returnFunction(res, error);
        }
    }

    async update_ATM_Card(req, res) {
        const returnMiddleware = new MiddleWare();
        try {

        } catch (error) {
            returnMiddleware.returnFunction(res, error);
        }
    }
}