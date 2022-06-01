import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// GraphQLs
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Single GraphQL Endpoint Route
const URI = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrapping whole application in the Apollo provider component */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
