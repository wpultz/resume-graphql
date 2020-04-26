import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { Resume } from './resume'

const client = new ApolloClient({ uri: 'http://localhost:8080/graphql' })

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" style={{ maxWidth: 1200, margin: 'auto', paddingLeft: 100, paddingRight: 100 }}>
        <Resume />
      </div>
    </ApolloProvider>
  )
}

export default App
