import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, {Auth} from 'aws-amplify';
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import { IonApp, IonPage } from '@ionic/react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './home/home';

function App() {
  return (
    <Router>
      <IonApp>
        <IonPage>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </IonPage>
      </IonApp>
    </Router>
  );
}

export default App;
