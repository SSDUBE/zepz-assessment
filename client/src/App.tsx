import './App.css';
import { Activities } from './views/activities';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:14000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Activities />
    </ApolloProvider>
  );
}

export default App;
