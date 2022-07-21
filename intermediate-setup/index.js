const express = require("express")
const { createServer } = require("http")
const { makeExecutableSchema } = require("@graphql-tools/schema");
const MONGODB = "mongodb+srv://admin:admin123@cluster0.hw2lhdo.mongodb.net/Subscription?retryWrites=true&w=majority";
const { SubscriptionServer } = require("subscriptions-transport-ws")
    const {execute, subscribe} = require("graphql")


(async function()
    {
    const app = express()
    const httpServer = createServer(app)
    
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    })


    const subscription = SubscriptionServer.create(
        { schema, execute, subscribe },
    {server: httpServer, path: "/graphql"}
    )
})();