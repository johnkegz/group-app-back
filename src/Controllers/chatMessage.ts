import * as express from 'express';
import { getRepository } from 'typeorm';
import Chat from '../chat/chat.entity';
class ChatMessage {
    
    returnChatMessages(){
           
    }

    createChat = async (message: any) => {
        const chatRepository = await getRepository(Chat);
        console.log("message>>", message)
        const chatData: any = message;
        const newChat = chatRepository.create(chatData);
        await chatRepository.save(newChat);
        return newChat;
      }
    sendMessage(){

    }

    receiveMessage(){

    }
}

export default ChatMessage;
