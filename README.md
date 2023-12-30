# Banking System
## Project Overview

The Banking System project is a comprehensive software solution that facilitates various banking operations for both customers and the bank itself. This README provides an overview of the project's key features and functionalities.

## Features

### Customer Portal

- Customers can apply for different types of ATM cards.
- Customers can request multiple types of checkbooks, each with varying numbers of pages.
- A customer may possess multiple ATM cards but is limited to having only one checkbook at a time.

### Multi-Branch Operations

- The bank can open multiple branches at different locations.
- Each branch can serve and manage multiple account holders, each associated with a specific customer.

### Loan Management

- Customers have the option to apply for loans, which require approval from the branch manager.
- Various loan types are available to meet customer's diverse financial needs.

### Transaction Records

- Each branch maintains transaction records, allowing the bank to keep track of all financial activities.
- The project implements various transaction methods to cater to different banking needs.

### ATM Machine Integration

- The bank's operations include the management of ATM machines, providing customers with convenient access to their accounts.

## Installation and Usage

To set up and use the Banking System project, follow the installation instructions provided in the project documentation. It includes details on system requirements, dependencies, and how to run the application.

## Directory Structure
Here's an overview of the directory structure of the project:

- **Banking System**: The root directory.
  - **config**: Contains configuration files for middleware and Mongoose, a popular MongoDB library.
    - `Middleware.js`: Middleware configuration for handling requests and responses.
    - `MongooseConfig.js`: Configuration for connecting to the MongoDB database.
  - **controller**: Contains the core logic of the program.
    - `Account_Controller.js`: Manages account-related operations.
    - `Account_Type_Controller.js`: Handles account type operations.
    - `ATM_Card_Controller.js`: Controls ATM card operations.
    - `ATM_Type_Controller.js`: Manages ATM card type operations.
    - `Branch_Controller.js`: Handles branch-related operations.
    - `CheckBook_Type_Controller.js`: Manages checkbook type operations.
    - `Customer_Controller.js`: Manages customer-related operations.
    - `Location_Controller.js`: Handles location-related operations.
  - **db**: Contains database models for various entities.
    - `Account_Type.js`: Model for account types.
    - `Account.js`: Model for bank accounts.
    - `ATM_Card.js`: Model for ATM cards.
    - `ATM_Machine.js`: Model for ATM machines.
    - `ATM_Type.js`: Model for ATM card types.
    - `Branch.js`: Model for bank branches.
    - `Cheack_Book.js`: Model for checkbooks.
    - `Check_Type.js`: Model for checkbook types.
    - `Customer.js`: Model for bank customers.
    - `Employee.js`: Model for bank employees.
    - `Instalment.js`: Model for loan installments.
    - `Loan_Type.js`: Model for loan types.
    - `Loan.js`: Model for loans.
    - `Location.js`: Model for locations.
    - `Transaction_Log.js`: Model for transaction logs.
    - `Transaction.js`: Model for banking transactions.
  - **router**: Contains API routes for different operations.
    - `Account_Router.js`: Routes for account-related operations.
    - `Account_Type_Router.js`: Routes for account type operations.
    - `ATM_Card_Router.js`: Routes for ATM card operations.
    - `ATM_Type_Router.js`: Routes for ATM card type operations.
    - `Branch_Router.js`: Routes for branch-related operations.
    - `Customer_Router.js`: Routes for customer-related operations.
    - `Location_Router.js`: Routes for location-related operations.
    - `Main_Router.js`: The main router that aggregates all other routes.
  - `index.js`: The entry point of the project.
  - `.env`: Environment configuration file.
  - `.gitignore`: A file specifying which files should stored information regarding to Git.
  - `package-lock.json` and `package.json`: Dependency files specifying project dependencies.

## Functionality
- **ATM Card Management**: Customers can apply for ATM cards of different types.
- **Checkbook Requests**: Customers can request checkbooks of various page counts.
- **Account Management**: Customers can have multiple ATM cards and one checkbook at a time.
- **Branch Management**: The bank can open multiple branches at different locations, each serving multiple account holders.
- **Loan Processing**: Customers can apply for different types of loans, which are approved by the branch manager.
- **Transaction Recording**: The system records and manages all banking transactions.
- **ATM Machines**: The bank has ATM machines for customer use.
- **Loan Repayment**: Customers can make loan payments, and the bank records installment facilities and payments.

## Getting Started
To run the project, follow these steps:

1. Install project dependencies using `npm install`.
2. Configure your MongoDB connection in `.env`.
3. Start the project with `npm start`.

## Dependencies
The project relies on various Node.js libraries and packages, which are listed in the `package.json` file.

Please refer to individual controller and router files for more detailed information about the functionality of the project.

Feel free to reach out to the project maintainers for any questions or issues.

**Enjoy your banking experience with our Banking System project!**

## Contributing

Contributions to this project are welcome. If you want to contribute, please refer to the project's contribution guidelines for more information.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it in accordance with the terms of the license.

## Acknowledgments

We would like to express our gratitude to all contributors and supporters of this project. Your help and feedback are invaluable in making this project a success.

---

This README file provides an overview of the project, its features, and how to get started. Be sure to include detailed documentation, installation instructions, and other relevant information in your project's documentation.
