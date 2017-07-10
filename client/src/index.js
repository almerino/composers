import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const networkInterface = createNetworkInterface({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT })

export const client = new ApolloClient({ networkInterface })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
