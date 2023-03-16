import { buildSchema } from "graphql";


//The following means that when we are going to ask for hello, we are going to get a reponse which is a string.
const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
    }

    type Query {
        product: Product
    }
`)

export default schema;