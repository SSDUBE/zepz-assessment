import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './src/graphql/typeDefs';
import resolvers from './src/graphql/resolvers';
import { ENV } from './src/utils/globals';

const port = ENV.PORT;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect(ENV.DB_STRING, { autoIndex: false }).then(
    () => {
      console.log('The connection to the MongoDB database was established successfully.');
      app.listen(port, () => {
        console.log(
          `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
        );
      });
    },
    (err) => console.log('Error connecting to DB', err)
  );
})();
