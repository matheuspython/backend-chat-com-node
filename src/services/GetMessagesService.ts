import prismaClient from '../prisma'


class GetMessages {
  async execute() {
    const messages = await prismaClient.message.findMany({
     
    });

    return messages
  }
}

export { GetMessages }