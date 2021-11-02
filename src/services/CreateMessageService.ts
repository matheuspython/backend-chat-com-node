import { io } from '../app'
import prismaClient from '../prisma'


class CreateMessageService {
  async execute(message: string) {
  const createMessage = await prismaClient.message.create({
    data: {
      message
    }
  })

  const infoWS = {
    message: createMessage.message,
    id: createMessage.id
  }

  io.emit("new_message", infoWS)

  return createMessage
}
}


export { CreateMessageService }