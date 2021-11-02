"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMessages = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetMessages {
    async execute() {
        const messages = await prisma_1.default.message.findMany({});
        return messages;
    }
}
exports.GetMessages = GetMessages;
