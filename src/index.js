import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import aws_exports from "./aws-exports";
import AWSAppSyncClient, {AUTH_TYPE} from "aws-appsync";



const client = new AWSAppSyncClient({
  url: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: aws_exports.aws_appsync_apiKey
    // jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
