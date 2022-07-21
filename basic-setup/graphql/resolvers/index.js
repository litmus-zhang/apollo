const messagesResolvers = require('./Messages')

module.exports = {
    Query: {
        ...messagesResolvers.Query

    },
    Mutation: {
        ...messagesResolvers.Mutation

    }
}


