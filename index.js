import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';


const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

/* Inside of the variable root is going to be the response when we are asking for hello.  This is going to be the replying
from GraphQl*/

const root = { product: () => {
    return {
        "id": 28759443,
        "name": "widget",
        "description": "Beautiful widget to use in your garden",
        "price": 34.99,
        "soldout": false
    }
}};

//Now we need to create the GraphQL extension.
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'))