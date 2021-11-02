"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageService = void 0;
const app_1 = require("../app");
const prisma_1 = __importDefault(require("../prisma"));
class CreateMessageService {
    async execute(message) {
        const createMessage = await prisma_1.default.message.create({
            data: {
                message
            }
        });
        const infoWS = {
            message: createMessage.message,
            id: createMessage.id
        };
        app_1.io.emit("new_message", infoWS);
        return createMessage;
    }
}
exports.CreateMessageService = CreateMessageService;
