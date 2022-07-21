const Message = require("../../model/message")

module.exports = {
    Mutation: {
        createMessage: async (_, { input: { text, username } }) =>
        {
            const newMessage = new Message({
                text: text,
                createdBy: username,
                createdAt: new Date().toISOString()
            })
           const res = await newMessage.save()
            console.log(newMessage)
            return res
        }

    },
    Query: {
        message: async(_, {id: ID }) => await Message.findById(ID),
        allMessage: async (_) => (await Message.find())
    }
}