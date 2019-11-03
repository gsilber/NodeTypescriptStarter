"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router/router");
const userRouter_1 = require("./router/userRouter");
class Application {
    constructor() {
        this.app = express_1.default();
        this.port = +process.env.serverPort || 3000;
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.initCors();
        this.mongoSetup();
    }
    // Starts the server on the port specified in the environment or on port 3000 if none specified.
    start() {
        this.buildRoutes();
        this.app.listen(this.port, () => console.log("Server listening on port " + this.port + "!"));
    }
    // sets up to allow cross-origin support from any host.  You can change the options to limit who can access the api.
    // This is not a good security measure as it can easily be bypassed,
    // but should be setup correctly anyway.  Without this, angular would not be able to access the api it it is on
    // another server.
    initCors() {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
    }
    // setup routes for the express server
    buildRoutes() {
        this.app.use("/api/user", new userRouter_1.UserRouter().getRouter());
        this.app.use("/api", new router_1.ApiRouter().getRouter());
    }
    mongoSetup() {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default
            .connect("mongodb+srv://admin:8r0jyHqIEZYb52uU@gameluncher-ve8ed.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log("MongoDB connected..."))
            .catch((err) => console.log(err));
    }
}
new Application().start();
//# sourceMappingURL=server.js.map