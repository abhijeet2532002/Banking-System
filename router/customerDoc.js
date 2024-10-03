const doc = () => {

    //  Branch
    // Branch Endpoint Collection
    /**
     * @swagger
     * tags:
     *   - name: Branch
     *     description: Operations related to Branch which customer want open account.
     */


    //  Customer
    // Customer Endpoint Collection
    /**
     * @swagger
     * tags:
     *   - name: Customer
     *     description: Operations related to customers which customer want open account.
     */

    // Retrieve a list of all customers
    /**
     * @swagger
     * /customer:
     *   get:
     *     summary: Retrieve a list of all customers
     *     description: Fetch all customers from the database.
     *     tags: [Customer]
     *     responses:
     *       200:
     *         description: A list of customers.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   name:
     *                     type: string
     *                   email:
     *                     type: string
     *                   phoneNo:
     *                     type: string
     *                   proof:
     *                     type: string
     *                   branch:
     *                     type: string
     */

    // Retrieve a single customer by email
    /**
     * @swagger
     * /customer/{email}:
     *   get:
     *     summary: Retrieve a single customer by email
     *     description: Fetch customer details by their email address.
     *     parameters:
     *       - in: path
     *         name: email
     *         required: true
     *         description: Email of the customer to retrieve
     *         schema:
     *           type: string
     *     tags: [Customer]
     *     responses:
     *       200:
     *         description: Customer details.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 name:
     *                   type: string
     *                 email:
     *                   type: string
     *                 phoneNo:
     *                   type: string
     *                 proof:
     *                   type: string
     *                 branch:
     *                   type: string
     */

    // Add a new customer to the system.
    /**
     * @swagger
     * /customer/create:
     *   post:
     *     summary: Create a new customer
     *     description: Add a new customer to the system.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Abhijeet Kumar"
     *               phoneNo:
     *                 type: string
     *                 example: "+919508840645"
     *               email:
     *                 type: string
     *                 example: "a@gmail.com"
     *               proof:
     *                 type: string
     *                 example: "Aadhar Card"
     *               branch:
     *                 type: string
     *                 example: "66f7ef3ce034c74464375ecd"
     *     tags: [Customer]
     *     responses:
     *       201:
     *         description: Customer successfully created.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Customer created successfully"
     */

    // Delete a customer by email
    /**
     * @swagger
     * /customer/delete/{email}:
     *   get:
     *     summary: Delete a customer by email
     *     description: Remove a customer from the database by their email.
     *     parameters:
     *       - in: path
     *         name: email
     *         required: true
     *         description: Email of the customer to delete
     *         schema:
     *           type: string
     *     tags: [Customer]
     *     responses:
     *       200:
     *         description: Customer deleted successfully.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Customer deleted successfully"
     */

    // Update a customer's information
    /**
     * @swagger
     * /customer/update/{email}:
     *   post:
     *     summary: Update a customer's information
     *     description: Update the proof of a customer identified by their email.
     *     parameters:
     *       - in: path
     *         name: email
     *         required: true
     *         description: Email of the customer to update
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               proof:
     *                 type: string
     *                 example: "PAN CARD"
     *     tags: [Customer]
     *     responses:
     *       200:
     *         description: Customer updated successfully.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Customer updated successfully"
     */


    // Location
    // Location API URL
    /**
     * @swagger
     * tags:
     *   - name: Location
     *     description: Operations related to locations
     */

    // Retrieve a list of all locations
    /**
     * @swagger
     * /location:
     *   get:
     *     summary: Retrieve a list of all locations
     *     description: Fetch all locations from the database.
     *     tags: [Location]
     *     responses:
     *       200:
     *         description: A list of locations.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   city:
     *                     type: string
     *                   state:
     *                     type: string
     *                   pincode:
     *                     type: string
     *                   country:
     *                     type: string
     */

    // Retrieve a single location by pincode
    /**
     * @swagger
     * /location/{pincode}:
     *   get:
     *     summary: Retrieve a single location by pincode
     *     description: Fetch location details by their pincode.
     *     parameters:
     *       - in: path
     *         name: pincode
     *         required: true
     *         description: Pincode of the location to retrieve
     *         schema:
     *           type: string
     *     tags: [Location]
     *     responses:
     *       200:
     *         description: Location details.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 city:
     *                   type: string
     *                 state:
     *                   type: string
     *                 pincode:
     *                   type: string
     *                 country:
     *                   type: string
     */

    // Create a new location
    /**
     * @swagger
     * /location/create:
     *   post:
     *     summary: Create a new location
     *     description: Add a new location to the system.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               city:
     *                 type: string
     *                 example: "Motihari"
     *               state:
     *                 type: string
     *                 example: "Bihar"
     *               pincode:
     *                 type: string
     *                 example: "845401"
     *               country:
     *                 type: string
     *                 example: "India"
     *     tags: [Location]
     *     responses:
     *       201:
     *         description: Location successfully created.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Location created successfully"
     */

    // Update a location by pincode
    /**
     * @swagger
     * /location/update/{pincode}:
     *   post:
     *     summary: Update a location by pincode
     *     description: Update the details of a location identified by its pincode.
     *     parameters:
     *       - in: path
     *         name: pincode
     *         required: true
     *         description: Pincode of the location to update
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               city:
     *                 type: string
     *                 example: "Dhaka"
     *     tags: [Location]
     *     responses:
     *       200:
     *         description: Location updated successfully.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Location updated successfully"
     */

    // Delete a location by pincode
    /**
     * @swagger
     * /location/delete/{pincode}:
     *   get:
     *     summary: Delete a location by pincode
     *     description: Remove a location from the database by its pincode.
     *     parameters:
     *       - in: path
     *         name: pincode
     *         required: true
     *         description: Pincode of the location to delete
     *         schema:
     *           type: string
     *     tags: [Location]
     *     responses:
     *       200:
     *         description: Location deleted successfully.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Location deleted successfully"
     */



    /**
 * @swagger
 * components:
 *   schemas:
 *     BranchSchema:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "60b8c9d91f15a51a0c8a3e1b"
 *         branchCode:
 *           type: string
 *           example: "BR001"
 *         bankName:
 *           type: string
 *           example: "Example Bank"
 *         location:
 *           type: string
 *           example: "60b8c9d91f15a51a0c8a3e1c"
 *         employee:
 *           type: array
 *           items:
 *             type: string
 *             example: "60b8c9d91f15a51a0c8a3e1d"
 *         customer:
 *           type: array
 *           items:
 *             type: string
 *             example: "60b8c9d91f15a51a0c8a3e1e"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-09-30T12:34:56.789Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-09-30T12:34:56.789Z"
 *       required:
 *         - branchCode
 *         - bankName
 */

    /**
     * @swagger
     * /branch/:
     *   get:
     *     summary: Get all branches
     *     tags: [Branch]
     *     responses:
     *       200:
     *         description: List of all branches
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/BranchSchema'
     */

    /**
     * @swagger
     * /branch/{branchCode}:
     *   get:
     *     summary: Get branch by branchCode
     *     tags: [Branch]
     *     parameters:
     *       - in: path
     *         name: branchCode
     *         schema:
     *           type: string
     *         required: true
     *         description: The branch code of the branch
     *     responses:
     *       200:
     *         description: A branch object
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/BranchSchema'
     *       404:
     *         description: Branch not found
     */

    /**
     * @swagger
     * /branch/create:
     *   post:
     *     summary: Create a new branch
     *     tags: [Branch]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/BranchSchema'
     *     responses:
     *       201:
     *         description: Branch created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/BranchSchema'
     *       400:
     *         description: Invalid input
     */

    /**
     * @swagger
     * /branch/update/{branchCode}:
     *   post:
     *     summary: Update branch details
     *     tags: [Branch]
     *     parameters:
     *       - in: path
     *         name: branchCode
     *         schema:
     *           type: string
     *         required: true
     *         description: The branch code of the branch to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/BranchSchema'
     *     responses:
     *       200:
     *         description: Branch updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/BranchSchema'
     *       404:
     *         description: Branch not found
     *       400:
     *         description: Invalid input
     */

    /**
     * @swagger
     * /branch/delete/{branchCode}:
     *   get:
     *     summary: Delete branch by branchCode
     *     tags: [Branch]
     *     parameters:
     *       - in: path
     *         name: branchCode
     *         schema:
     *           type: string
     *         required: true
     *         description: The branch code of the branch to delete
     *     responses:
     *       200:
     *         description: Branch deleted successfully
     *       404:
     *         description: Branch not found
     */



    

    // All Schema mentioned
    // Customer Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Customer:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *           example: "Abhijeet Kumar"  # Added example
     *         phoneNo:
     *           type: string
     *           example: "+919508840645"  # Added example
     *         email:
     *           type: string
     *           example: "a@gmail.com"  # Added example
     *         proof:
     *           type: string
     *           example: "Aadhar Card"  # Added example
     *         branch:
     *           type: string
     *           example: "66f7ef3ce034c74464375ecd"  # Added example
     *         account:
     *           type: string
     *           example: "Account12345"  # Optional property; added example
     *       required:
     *         - name
     *         - phoneNo
     *         - email
     *         - proof
     */

    // Location Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Location:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1b"  # Example ObjectId
     *         city:
     *           type: string
     *           example: "Motihari"
     *         state:
     *           type: string
     *           example: "Bihar"
     *         pincode:
     *           type: string
     *           example: "845401"
     *         country:
     *           type: string
     *           example: "India"
     *         branch:
     *           type: array
     *           items:
     *             type: string
     *           example: ["60b8c9d91f15a51a0c8a3e1c"]  # Example branch ObjectId
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - city
     *         - state
     *         - pincode
     *         - country
     */

    // Account Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Account:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1b"  # Example ObjectId
     *         accountNo:
     *           type: string
     *           example: "123456789"
     *         user:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1c"  # Example ObjectId of the customer
     *         type:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1d"  # Example ObjectId of the account type
     *         balance:
     *           type: number
     *           example: 1000.00
     *         check:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1e"  # Example ObjectId of the check book
     *         ATM:
     *           type: array
     *           items:
     *             type: string
     *             example: "60b8c9d91f15a51a0c8a3e1f"  # Example ObjectId of an ATM
     *         status:
     *           type: string
     *           example: "OPEN"
     *         transaction:
     *           type: array
     *           items:
     *             type: string
     *             example: "60b8c9d91f15a51a0c8a3e20"  # Example ObjectId of a transaction
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - accountNo
     *         - user
     *         - balance
     *         - status
     */

    // Account Type Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Account_Type:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1o"  # Example ObjectId
     *         type:
     *           type: string
     *           example: "Savings Account"  # Example account type
     *         description:
     *           type: string
     *           example: "A standard savings account"  # Example description
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - type
     *         - description
     */

    
    // ATM Type Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     ATM_Type:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1f"  # Example ObjectId
     *         type:
     *           type: string
     *           example: "Cash Dispenser"
     *         description:
     *           type: string
     *           example: "ATM that dispenses cash."
     *         active:
     *           type: boolean
     *           example: true
     *         ATM:
     *           type: array
     *           items:
     *             type: string
     *             example: "60b8c9d91f15a51a0c8a3e1g"  # Example ObjectId of an ATM
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - type
     *         - description
     *         - active
     */

    // ATM Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     ATM_Card:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1h"  # Example ObjectId
     *         account:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1i"  # Example ObjectId of an Account
     *         type:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1j"  # Example ObjectId of an ATM_Type
     *         expire:
     *           type: string
     *           example: "12/25"  # Example expiration date
     *         CSV:
     *           type: string
     *           example: "123"  # Example CSV code
     *         ATM_NO:
     *           type: string
     *           example: "ATM-001"  # Example ATM number
     *         transaction:
     *           type: array
     *           items:
     *             type: string
     *             example: "60b8c9d91f15a51a0c8a3e1k"  # Example ObjectId of a Transaction
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - account
     *         - type
     *         - expire
     *         - CSV
     *         - ATM_NO
     */

    // Check Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Check_Book:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1l"  # Example ObjectId
     *         checkNo:
     *           type: string
     *           example: "CHK-001"  # Example check number
     *         name:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1m"  # Example ObjectId of a Check_Type
     *         account:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1n"  # Example ObjectId of an Account
     *         starting_page:
     *           type: number
     *           example: 1  # Example starting page number
     *         ending_page:
     *           type: number
     *           example: 10  # Example ending page number
     *         pages:
     *           type: number
     *           example: 10  # Example total pages
     *         status:
     *           type: string
     *           example: "ACTIVE"  # Status of the check book
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - checkNo
     *         - starting_page
     *         - ending_page
     *         - pages
     */

    // Check Type Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Check_Type:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1o"  # Example ObjectId
     *         type:
     *           type: string
     *           example: "Personal Check"  # Example check type
     *         description:
     *           type: string
     *           example: "A check used for personal transactions"  # Example description
     *         check:
     *           type: array
     *           items:
     *             type: string
     *             example: "60b8c9d91f15a51a0c8a3e1p"  # Example ObjectId of a Check
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - type
     *         - description
     */

    // Transaction Schema
    /**
     * @swagger
     * components:
     *   schemas:
     *     Transaction:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1q"  # Example ObjectId
     *         method:
     *           type: string
     *           example: "60b8c9d91f15a51a0c8a3e1r"  # Example ObjectId of Account or ATM
     *         amount:
     *           type: number
     *           example: 1000.00  # Example transaction amount
     *         status:
     *           type: string
     *           example: "Success"  # Transaction status
     *         type:
     *           type: string
     *           enum: [Withdrawal, Deposit]
     *           example: "Withdrawal"  # Type of transaction
     *         code:
     *           type: number
     *           example: 123  # Example code reference for Branch or ATM_Machine
     *         onModel1:
     *           type: string
     *           enum: [Account, ATM]
     *           example: "Account"  # The model type for method reference
     *         onModel2:
     *           type: string
     *           enum: [Branch, ATM_Machine]
     *           example: "Branch"  # The model type for code reference
     *         createdAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           example: "2024-09-30T12:34:56.789Z"
     *       required:
     *         - method
     *         - amount
     *         - status
     *         - type
     */

};

export default doc;