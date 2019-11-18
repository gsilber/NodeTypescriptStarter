"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // Database connection information
    database: process.env.database,
    // Secret key for JWT signing and encryption
    secret: process.env.secret,
    // Setting port for server
    port: process.env.serverPort || 3000
};
//# sourceMappingURL=config.js.map