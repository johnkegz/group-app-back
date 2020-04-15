"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const chat_entity_1 = __importDefault(require("../chat/chat.entity"));
class ChatMessage {
    constructor() {
        this.createChat = (message) => __awaiter(this, void 0, void 0, function* () {
            const chatRepository = yield typeorm_1.getRepository(chat_entity_1.default);
            console.log("message>>", message);
            const chatData = message;
            const newChat = chatRepository.create(chatData);
            yield chatRepository.save(newChat);
            return newChat;
        });
    }
    returnChatMessages() {
    }
    sendMessage() {
    }
    receiveMessage() {
    }
}
exports.default = ChatMessage;
//# sourceMappingURL=chatMessage.js.map