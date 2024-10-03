// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Banking Ecosystem API',
            version: '1.0.0',
            description: `
                Banking Ecosystem
                - Developed an innovative online Banking platform similar to YONO.
                - Develop API endpoints for banking functionalities like balance inquiries, fund transfers, and transaction history retrieval.
                - Prioritize security measures such as OAuth authentication and data encryption to protect sensitive information.
                - Create user-friendly documentation outlining API usage, authentication procedures, and error handling guidelines.
                - Optimize APIs for scalability and performance to ensure reliable service delivery during peak usage.
                - Tech Stack: NODEJS, React (with Bootstrap), Razorpay, MongoDB, Express, PassportJS.
            `,
        },
        servers: [
            {
                url: 'http://localhost:9697', // Your server URL
            },
        ],
    },
    apis: ['./router/*.js'], // Path to your API routes
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        swaggerOptions: {
            url: '/api-docs/swagger.json',
        },
        customCss: `
            .swagger-ui .topbar { font-size: 20px; }
            .swagger-ui .opblock-summary { font-size: 18px; }
            .swagger-ui .markdown { font-size: 16px; }
        `,
    }));
};

export default swaggerDocs;
