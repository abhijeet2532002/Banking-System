import Customer from '../model/Customer.js';
import middleware from '../config/Middleware.js';
import Branch from '../model/Branch.js';
import Account from '../model/Account.js';

export default class CustomerController {
    async createCustomer(req, res) {
        const returnMiddleWare = new middleware();
        try {
            const branch = await Branch.findById(req.body.branch);
            if (branch) {
                const customer = await Customer.create(req.body);
                branch.customer.push(customer);
                branch.save();
                returnMiddleWare.returnFunction(res, [customer,branch]);
            } else
                returnMiddleWare.returnFunction(res, "branch Founded");
        } catch (error) {
            returnMiddleWare.returnFunction(res, error);
        }
    }

    async getAllCustomer(req, res) {
        const returnMiddleWare = new middleware();
        try {
            const allCustomer = await Customer.find({}).populate('branch').populate('account');
            returnMiddleWare.returnFunction(res, allCustomer);
        } catch (error) {
            returnMiddleWare.returnFunction(res, error);
        }
    }

    async getCustomer(req, res) {
        const returnMiddleWare = new middleware();
        try {
            const oneCustomer = await Customer.findOne({ email: req.params.email }).populate('branch').populate('account');;
            returnMiddleWare.returnFunction(res, oneCustomer);
        } catch (error) {
            returnMiddleWare.returnFunction(res, error);
        }
    }

    async deleteCustomer(req, res) {
        const returnMiddleWare = new middleware();
        try {
            const deleteCustomer = await Customer.findOneAndDelete({ email: req.params.email });
            const updateBranch = await Branch.findByIdAndUpdate(deleteCustomer.branch, {
                $pull: {
                    customer: deleteCustomer.id
                }
            });
            const deleteAccount = await Account.findByIdAndDelete(deleteCustomer.account);
            returnMiddleWare.returnFunction(res, [deleteCustomer, updateBranch, deleteAccount]);
        } catch (error) {
            returnMiddleWare.returnFunction(res, error);
        }
    }

    async updateCustomer(req, res) {
        const returnMiddleWare = new middleware();
        console.log(req.params.email);
        try {
            const updateCustomer = await Customer.findOneAndUpdate({ email: req.params.email }, req.body);
            returnMiddleWare.returnFunction(res, updateCustomer);
        } catch (error) {
            returnMiddleWare.returnFunction(res, error);
        }
    }
}