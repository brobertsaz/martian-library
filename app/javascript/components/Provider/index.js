import React from 'react'
import { ApolloProvider } from 'react-apollo';
import { createClient, createCache } from '../../utils/apollo';

export default ({ children }) => (
  <ApolloProvider client={createClient(createCache())}>
    { children }
  </ApolloProvider>
)
