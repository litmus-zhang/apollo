const path = require("path")
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
})
const { ApolloServer } = require("apollo-server")
const typeDefs = require("./graphql/typedefs")
const resolvers = require("./graphql/resolvers")
const mongoose = require("mongoose")

const server = new ApolloServer({
    typeDefs,
    resolvers
})
const startServer = () =>
{
    try {
       mongoose.connect(process.env.MONGODB_URI)
       console.log("MongoDB connected")
       const res = server.listen({port : 5000})
        console.log(`Server running at ${res.url}`)
        return res;
    } catch (error) {
        console.error(error)
    }
}
startServer()



