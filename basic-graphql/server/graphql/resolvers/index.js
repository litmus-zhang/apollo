const messageResolvers = require('./Messages')

module.exports = {
    Query: {
        ...messageResolvers.Query
    }, 
    Mutation: {
        ...messageResolvers.Mutation
    }
}