/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();

// Create a schema and a root resolver:
const schema = buildSchema(`
    type Constant {
        constant_id: Int
        category: String
        title: String
        status: Int
        created_at: String
        updated_at: String
    }

    type Query {
        constants: [Constant]
    }
`);

const rootValue = {
    constants: async () => await prisma.constants.findMany()
};

// Use those to handle incoming requests:
app.use('/graphql',
graphqlHTTP({
    schema,
    rootValue,
    graphiql:true
}));

app.get('/api', (req, res) => {
  prisma.constants.findMany().then((response) => console.log(response));
  res.send({ message: 'Welcome to hackernews-backend!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
