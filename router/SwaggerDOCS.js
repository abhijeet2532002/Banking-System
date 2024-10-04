const SwaggerDOCS = () => {

   //  Branch
   // Branch Endpoint Collection
   /**
    * @swagger
    * tags:
    *   - name: Branch
    *     description: Operations related to Branch which customer want open account.
    */

   // Fetch all Branch
   /**
   * @swagger
   * components:
   *   schemas:
   *     Branch:
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

   // Fetch all Branch
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
    *                 $ref: '#/components/schemas/Branch'
    */

   // Fetch Branch by branch code
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
    *               $ref: '#/components/schemas/Branch'
    *       404:
    *         description: Branch not found
    */

   // Create Branch
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
    *             $ref: '#/components/schemas/Branch'
    *     responses:
    *       201:
    *         description: Branch created successfully
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Branch'
    *       400:
    *         description: Invalid input
    */

   // Update Branch by Branch code
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
    *             $ref: '#/components/schemas/Branch'
    *     responses:
    *       200:
    *         description: Branch updated successfully
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Branch'
    *       404:
    *         description: Branch not found
    *       400:
    *         description: Invalid input
    */

   // Delete Branch by Branch Code
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
    *                 $ref: '#/components/schemas/Location'
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
    *               $ref: '#/components/schemas/Location'
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
    *             $ref: '#/components/schemas/Location'
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
    *             $ref: '#/components/schemas/Location'
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

   // Customer Endpoint Collection
   /**
    * @swagger
    * tags:
    *   - name: Customer
    *     description: Operations related to customers who want to open an account.
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
    *                 $ref: '#/components/schemas/Customer'
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
    *               $ref: '#/components/schemas/Customer'
    */

   // Create a new customer
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
    *             $ref: '#/components/schemas/Customer'
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
    *             $ref: '#/components/schemas/Customer'
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
    *
   
   // Account Type Endpoint collection
   /**
    * @swagger
    * tags:
    *   - name: Account Type
    *     description: Account type management operations
    */

   // Get all account types
   /**
    * @swagger
    * /accountType:
    *   get:
    *     tags: [Account Type]
    *     summary: Get all account types
    *     responses:
    *       200:
    *         description: A list of account types
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/Account_Type'  # Reference to Account_Type schema
    *       500:
    *         description: Internal server error
    */

   // Get a specific account type by type
   /**
    * @swagger
    * /accountType/{type}:
    *   get:
    *     tags: [Account Type]
    *     summary: Get a specific account type by type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The account type to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Account type details
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Account_Type'  # Reference to Account_Type schema
    *       404:
    *         description: Account type not found
    *       500:
    *         description: Internal server error
    */

   // Create a new account type
   /**
    * @swagger
    * /accountType/create:
    *   post:
    *     tags: [Account Type]
    *     summary: Create a new account type
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Account_Type'  # Reference to Account_Type schema
    *     responses:
    *       201:
    *         description: Account type created successfully
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Account_Type'  # Reference to Account_Type schema
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Update an existing account type
   /**
    * @swagger
    * /accountType/update/{type}:
    *   post:
    *     tags: [Account Type]
    *     summary: Update an existing account type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The account type to update
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Account_Type'  # Reference to Account_Type schema
    *     responses:
    *       200:
    *         description: Account type updated successfully
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Account_Type'  # Reference to Account_Type schema
    *       404:
    *         description: Account type not found
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Delete an existing account type
   /**
    * @swagger
    * /accountType/delete/{type}:
    *   delete:
    *     tags: [Account Type]
    *     summary: Delete an existing account type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The account type to delete
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Account type deleted successfully
    *       404:
    *         description: Account type not found
    *       500:
    *         description: Internal server error
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

   // Account Endpoint collection
   /**
    * @swagger
    * tags:
    *   - name: Account
    *     description: Account management operations
    */

   // Get all accounts details
   /**
    * @swagger
    * /account:
    *   get:
    *     tags: [Account]
    *     summary: Get all accounts details
    *     responses:
    *       200:
    *         description: A list of accounts
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/Account'  # Reference to Account schema
    *       500:
    *         description: Internal server error
    */

   // Get a specific account by account number
   /**
    * @swagger
    * /account/{accountNo}:
    *   get:
    *     tags: [Account]
    *     summary: Get a specific account by account number
    *     parameters:
    *       - name: accountNo
    *         in: path
    *         required: true
    *         description: The account number to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Account details
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Account'  # Reference to Account schema
    *       404:
    *         description: Account not found
    *       500:
    *         description: Internal server error
    */

   // Create a new account
   /**
    * @swagger
    * /account/create:
    *   post:
    *     tags: [Account]
    *     summary: Create a new account
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Account'  # Reference to Account schema
    *     responses:
    *       201:
    *         description: Account created successfully
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Account'  # Reference to Account schema
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
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

   // ATM Type
   // ATM type Endpoint API
   /**
    * @swagger
    * tags:
    *   - name: ATM Type
    *     description: Operations related to ATM types
    */

   // Retrieve all ATM types
   /**
    * @swagger
    * /atm_type:
    *   get:
    *     tags: [ATM Type]
    *     summary: Retrieve all ATM types
    *     responses:
    *       200:
    *         description: Successfully retrieved list of ATM types
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/ATM_Type'
    *       500:
    *         description: Internal server error
    */

   // Retrieve a specific ATM type by its type
   /**
    * @swagger
    * /atm_type/{type}:
    *   get:
    *     tags: [ATM Type]
    *     summary: Retrieve a specific ATM type by its type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The type of ATM to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully retrieved the ATM type
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/ATM_Type'
    *       404:
    *         description: ATM type not found
    *       500:
    *         description: Internal server error
    */

   // Create a new ATM type
   /**
    * @swagger
    * /atm_type/create:
    *   post:
    *     tags: [ATM Type]
    *     summary: Create a new ATM type
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/ATM_Type'
    *     responses:
    *       201:
    *         description: Successfully created a new ATM type
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/ATM_Type'
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Update an existing ATM type
   /**
    * @swagger
    * /atm_type/update/{type}:
    *   post:
    *     tags: [ATM Type]
    *     summary: Update an existing ATM type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The type of the ATM to update
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/ATM_Type'
    *     responses:
    *       200:
    *         description: Successfully updated the ATM type
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/ATM_Type'
    *       404:
    *         description: ATM type not found
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Delete an existing ATM type
   /**
    * @swagger
    * /atm_type/delete/{type}:
    *   get:
    *     tags: [ATM Type]
    *     summary: Delete an existing ATM type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The type of ATM to delete
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully deleted the ATM type
    *       404:
    *         description: ATM type not found
    *       500:
    *         description: Internal server error
    */


   // ATM Card Schema
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
    *         ATM_NO:
    *           type: string
    *           example: "123456789"
    *         name:
    *           type: string
    *           example: "John Doe"
    *         number:
    *           type: string
    *           example: "4111111111111111"
    *         expiration:
    *           type: string
    *           example: "2025-12"
    *         CVV:
    *           type: string
    *           example: "123"
    *         createdAt:
    *           type: string
    *           format: date-time
    *           example: "2024-09-30T12:34:56.789Z"
    *         updatedAt:
    *           type: string
    *           format: date-time
    *           example: "2024-09-30T12:34:56.789Z"
    *       required:
    *         - ATM_NO
    *         - name
    *         - number
    *         - expiration
    *         - CVV
    */

   // ATM Card
   // ATM Card Endpoint API
   /**
    * @swagger
    * tags:
    *   - name: ATM Card
    *     description: Operations related to ATM cards
    */

   // Retrieve all ATM cards
   /**
    * @swagger
    * /atm_card:
    *   get:
    *     tags: [ATM Card]
    *     summary: Retrieve all ATM cards
    *     responses:
    *       200:
    *         description: Successfully retrieved list of ATM cards
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/ATM_Card'
    *       500:
    *         description: Internal server error
    */

   // Retrieve a specific ATM card by its ATM_NO
   /**
    * @swagger
    * /atm_card/{ATM_NO}:
    *   get:
    *     tags: [ATM Card]
    *     summary: Retrieve a specific ATM card by its ATM_NO
    *     parameters:
    *       - name: ATM_NO
    *         in: path
    *         required: true
    *         description: The ATM number of the card to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully retrieved the ATM card
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/ATM_Card'
    *       404:
    *         description: ATM card not found
    *       500:
    *         description: Internal server error
    */

   // Create a new ATM card
   /**
    * @swagger
    * /atm_card/create:
    *   post:
    *     tags: [ATM Card]
    *     summary: Create a new ATM card
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/ATM_Card'
    *     responses:
    *       201:
    *         description: Successfully created a new ATM card
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/ATM_Card'
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Delete an existing ATM card
   /**
    * @swagger
    * /atm_card/delete/{ATM_NO}:
    *   get:
    *     tags: [ATM Card]
    *     summary: Delete an existing ATM card
    *     parameters:
    *       - name: ATM_NO
    *         in: path
    *         required: true
    *         description: The ATM number of the card to delete
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully deleted the ATM card
    *       404:
    *         description: ATM card not found
    *       500:
    *         description: Internal server error
    */

   // Update an existing ATM card
   /**
    * @swagger
    * /atm_card/update/{ATM_NO}:
    *   post:
    *     tags: [ATM Card]
    *     summary: Update an existing ATM card
    *     parameters:
    *       - name: ATM_NO
    *         in: path
    *         required: true
    *         description: The ATM number of the card to update
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/ATM_Card'
    *     responses:
    *       200:
    *         description: Successfully updated the ATM card
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/ATM_Card'
    *       404:
    *         description: ATM card not found
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */


   // Check book type Schema
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

   // Check book type endpoint
   /**
    * @swagger
    * tags:
    *   - name: CheckBookType
    *     description: Operations related to Check Book Types
    */

   // // Find all existing check book type
   /**
    * @swagger
    * /check_book:
    *   get:
    *     tags: [CheckBookType]
    *     summary: Retrieve all check book types
    *     responses:
    *       200:
    *         description: Successfully retrieved list of check book types
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/Check_Type'
    *       500:
    *         description: Internal server error
    */

   // FInd an existing check book type by type name
   /**
    * @swagger
    * /check_book/{type}:
    *   get:
    *     tags: [CheckBookType]
    *     summary: Retrieve a specific check book type by its type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The type of the check book to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully retrieved the check book type
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Check_Type'
    *       404:
    *         description: Check book type not found
    *       500:
    *         description: Internal server error
    */

   // Create an existing check book type
   /**
    * @swagger
    * /check_book/create:
    *   post:
    *     tags: [CheckBookType]
    *     summary: Create a new check book type
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Check_Type'
    *     responses:
    *       201:
    *         description: Successfully created a new check book type
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Check_Type'
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Update an existing check book type
   /**
    * @swagger
    * /check_book/update/{type}:
    *   post:
    *     tags: [CheckBookType]
    *     summary: Update an existing check book type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The type of the check book to update
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Check_Type'
    *     responses:
    *       200:
    *         description: Successfully updated the check book type
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Check_Type'
    *       404:
    *         description: Check book type not found
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Delete an existing check book type
   /**
    * @swagger
    * /check_book/delete/{type}:
    *   delete:  # Change from 'get' to 'delete'
    *     tags: [CheckBookType]
    *     summary: Delete an existing check book type
    *     parameters:
    *       - name: type
    *         in: path
    *         required: true
    *         description: The type of the check book to delete
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully deleted the check book type
    *       404:
    *         description: Check book type not found
    *       500:
    *         description: Internal server error
    */


   // Check book Schema
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

   // Check book endpoint
   /**
    * @swagger
    * tags:
    *   - name: CheckBook
    *     description: Operations related to Check Books
    */

    //Find all check book
   /**
    * @swagger
    * /check_book:
    *   get:
    *     tags: [CheckBook]
    *     summary: Retrieve all check books
    *     responses:
    *       200:
    *         description: Successfully retrieved list of check books
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/Check_Book'
    *       500:
    *         description: Internal server error
    */

    // Find Check book by check number
   /**
    * @swagger
    * /check_book/{checkNo}:
    *   get:
    *     tags: [CheckBook]
    *     summary: Retrieve a specific check book by its check number
    *     parameters:
    *       - name: checkNo
    *         in: path
    *         required: true
    *         description: The check number of the check book to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully retrieved the check book
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Check_Book'
    *       404:
    *         description: Check book not found
    *       500:
    *         description: Internal server error
    */

   // Issue Check book
   /**
    * @swagger
    * /check_book/create:
    *   post:
    *     tags: [CheckBook]
    *     summary: Create a new check book
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Check_Book'
    *     responses:
    *       201:
    *         description: Successfully created a new check book
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Check_Book'
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   /**
    * @swagger
    * /check_book/update/{checkNo}:
    *   post:
    *     tags: [CheckBook]
    *     summary: Update an existing check book
    *     parameters:
    *       - name: checkNo
    *         in: path
    *         required: true
    *         description: The check number of the check book to update
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Check_Book'
    *     responses:
    *       200:
    *         description: Successfully updated the check book
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Check_Book'
    *       404:
    *         description: Check book not found
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
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

   // Transaction endpoint
   /**
    * @swagger
    * tags:
    *   - name: Transaction
    *     description: Operations related to Transactions
    */

   // Fetch all Transaction
   /**
    * @swagger
    * /transaction:
    *   get:
    *     tags: [Transaction]
    *     summary: Retrieve all transactions
    *     responses:
    *       200:
    *         description: Successfully retrieved list of transactions
    *         content:
    *           application/json:
    *             schema:
    *               type: array
    *               items:
    *                 $ref: '#/components/schemas/Transaction'
    *       500:
    *         description: Internal server error
    */

   // Fetch Transaction by transaction Id
   /**
    * @swagger
    * /transaction/{transactionNo}:
    *   get:
    *     tags: [Transaction]
    *     summary: Retrieve a specific transaction by its transaction number
    *     parameters:
    *       - name: transactionNo
    *         in: path
    *         required: true
    *         description: The transaction number of the transaction to retrieve
    *         schema:
    *           type: string
    *     responses:
    *       200:
    *         description: Successfully retrieved the transaction
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Transaction'
    *       404:
    *         description: Transaction not found
    *       500:
    *         description: Internal server error
    */

    // Create Transaction Like as (deposite,widrawal)
   /**
    * @swagger
    * /transaction/create:
    *   post:
    *     tags: [Transaction]
    *     summary: Create a new transaction
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Transaction'
    *     responses:
    *       201:
    *         description: Successfully created a new transaction
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Transaction'
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

   // Update Transaction History
   /**
    * @swagger
    * /transaction/update/{transactionNo}:
    *   post:
    *     tags: [Transaction]
    *     summary: Update an existing transaction
    *     parameters:
    *       - name: transactionNo
    *         in: path
    *         required: true
    *         description: The transaction number of the transaction to update
    *         schema:
    *           type: string
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Transaction'
    *     responses:
    *       200:
    *         description: Successfully updated the transaction
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Transaction'
    *       404:
    *         description: Transaction not found
    *       400:
    *         description: Bad request
    *       500:
    *         description: Internal server error
    */

};

export default SwaggerDOCS;