import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://pump-memez-api-staging.up.railway.app/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
