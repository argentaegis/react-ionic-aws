import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, {Auth} from 'aws-amplify';
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import { IonApp, IonPage } from '@ionic/react';

function App() {
  return (
    <IonApp>
      <IonPage>
        Hello
      </IonPage>
    </IonApp>
  );
}

export default App;
