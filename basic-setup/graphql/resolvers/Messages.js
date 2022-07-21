const Message = require("../../model/Message.js")


module.exports = {
    Mutation: {
        async createMessage(_, { input: { text, username } })
        {
            const newMessage = new Message({
                text: text,
                createdBy: username,
                createdAt: new Date().toISOString()
            })

            const res = await newMessage.save()
            return res
        }

    },
    Query: {
        message: (_, { ID }) => Message.findById(ID)
    }
}