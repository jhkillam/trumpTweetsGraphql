import { Cat } from "./models/Cat"


export const resolvers = {
    Query: {
        hello: () => "howdy"
    },
    Mutation: {
        createCat: (_, { name }) => {
            const kitty = new Cat({ name });
            return kitty.save
        }
    }
}