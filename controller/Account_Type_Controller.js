import AccountType from '../model/Account_Type.js';

export default class AccountTypeController {
    async createAccountType(req, res) {
        try {
            const accountType = await AccountType.create(req.body);
            return res.json({
                accountType
            });
        } catch (errorInfo) {
            return res.json({
                errorInfo
            })
        }
    }

    async deleteAccountType(req, res) {
        try {
            const deleteAccountType = await AccountType.findOneAndDelete({type: req.params.type});
            return res.json({
                deleteAccountType
            });
        }
        catch (errorInfo) {
            return res.json({
                errorInfo
            })
        }
    }

    async getAccountType(req, res) {
        try {
            const accountType = await AccountType.findOne({ type: req.params.type });
            return res.json({
                accountType
            });
        } catch (errorInfo) {
            return res.json({
                errorInfo
            })
        }
    }

    async getAllAccountType(req, res) {
        try {
            const accountType = await AccountType.find({});
            return res.json({
                accountType
            });
        } catch (errorInfo) {
            return res.json({
                errorInfo
            })
        }
    }

    async updateAccountType(req, res) {
        try {
            const updateAccountType = await AccountType.findOneAndUpdate({type: req.params.type},req.body);
            return res.json({
                updateAccountType
            });
        }
        catch (errorInfo) {
            return res.json({
                errorInfo
            })
        }
    }
}