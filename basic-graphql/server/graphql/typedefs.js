const { gql } = require("apollo-server")

module.exports = gql`
    type Message {
    id: ID
    text: String
    createdAt: String
    createdBy: String
    }
    input messageInput {
        text: String
        username: String
    }

    type Query{
        message(id : ID!): Message
        allMessage : [Message!]!
    }

    type Mutation{
        createMessage(input: messageInput): Message
    }
`