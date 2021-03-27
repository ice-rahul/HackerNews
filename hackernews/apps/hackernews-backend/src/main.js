/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

// Create a schema and a root resolver:
const schema = buildSchema(`
    type Book {
        title: String!
        author: String!
    }

    type Query {
        books: [Book]
    }
`);

const rootValue = {
    books: [
        {
            title: "The Name of the Wind",
            author: "Patrick Rothfuss",
        },
        {
            title: "The Wise Man's Fear",
            author: "Patrick Rothfuss",
        }
    ]
};

// Use those to handle incoming requests:
app.use('/graphql',
graphqlHTTP({
    schema,
    rootValue,
    graphiql:true
}));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to hackernews-backend!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
