import Branch from '../model/Branch.js';
import Location from '../model/Location.js';
import Middleware from '../config/Middleware.js'

export default class BranchController {

    async createBranch(req, res) {
        const responseMiddleware = new Middleware();
        const branchCode = responseMiddleware.generateUniqueId(4);
        try {
            const branchFound = await Branch.findOne({ branchCode: branchCode });
            if (!branchFound) {
                const location = await Location.findById(req.body.location);
                if (location) {
                    const branch = await Branch.create({ branchCode: branchCode, ...req.body });
                    location.branch.push(branch);
                    location.save();
                    responseMiddleware.returnFunction(res, [branch]);
                }
                else
                    responseMiddleware.returnFunction(res, "invalid location");
            }
            else
                responseMiddleware.returnFunction(res, branchFound);
        }
        catch (err) {
            responseMiddleware.returnFunction(res, ["Error in creating branch", err]);
        }
    }

    async getBranch(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const branch = await Branch.findOne({ branchCode: req.params.branchCode }).populate('location').populate({
                path: 'customer',
                populate: {
                    path: 'account'
                }
            })
            responseMiddleware.returnFunction(res, branch);
        }
        catch (errorInfo) {
            responseMiddleware.returnFunction(res, errorInfo);
        }
    }

    async getAllBranch(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const allBranch = await Branch.find({}).populate('location');
            responseMiddleware.returnFunction(res, allBranch);
        }
        catch (errorInfo) {
            responseMiddleware.returnFunction(res, ["fetching all Branch", errorInfo])
        }

    }

    async deleteBranch(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const deleteBranch = await Branch.findOneAndDelete({ branchCode: req.params.branchCode });
            const location = await Location.findByIdAndUpdate(deleteBranch.location, {
                $pull: {
                    branch: deleteBranch.id
                }
            });
            responseMiddleware.returnFunction(res, [deleteBranch,location]);
        }
        catch (errorInfo) {
            responseMiddleware.returnFunction(res, errorInfo);
        }
    }

    async updateBranch(req, res) {
        const responseMiddleware = new Middleware();
        try {
            const updateBranch = await Branch.findOneAndUpdate({ branchCode: req.params.branchCode }, req.body);
            responseMiddleware.returnFunction(res, updateBranch);
        }
        catch (errorInfo) {
            console.log(errorInfo);
            responseMiddleware.returnFunction(res, errorInfo);
        }
    }
    
}