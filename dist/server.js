"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class ServerBootstrap {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 8000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use('/api', this.routers());
        this.listen();
    }
    // Retornamos un array de rutas de express 
    routers() {
        // Ejecutamos cada clase router dentro del array separadas por coma
        return [new router_1.UserRouter().router];
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Connected on server in port ${this.port}`);
        });
    }
}
new ServerBootstrap();
