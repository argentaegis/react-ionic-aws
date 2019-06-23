import React, { Component } from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {withApollo} from 'react-apollo';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {};

    console.log('Home props');
    console.log(props);
  }

  addPerson() {

  };

  addProject() {

  };

  addMembership() {

  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton>
          Add Person
        </IonButton>
        <IonButton>
          Add Project
        </IonButton>
        <IonButton>
          Add Membership
        </IonButton>
      </IonPage>
    )
  }


}

let component = withApollo(Home);
component = withRouter(component);
export default component;
