import { makeExecutableSchema } from "@graphql-tools/schema"
import { resolvers } from "./resolvers"
const { Country, Activity } = require('../db');

const typeDefs = `
    type Query{
        hello:String
        greet(name:String):String
        country(id:String):Country
    }
    type Country{
        id: String
        name: String
        flagImg: String
          continent: String
          capital: String
          subregion: String
          area:Float
          population: Int
    }
    
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})