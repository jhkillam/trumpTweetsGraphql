import { ApolloServer, gql } from "apollo-server-express";
import express from "express"
// import { typeDefs, resolvers } from "./schema";

const app =  express();

const typeDefs = gql`
    type Query {
        hello: String!
    }
`

const resolvers = {
    Query: {
        hello: () => "howdy"
    }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`server is live @ http://localhost:400/${server.graphqlPath}`))