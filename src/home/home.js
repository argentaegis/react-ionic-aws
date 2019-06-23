import React, { Component } from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { withRouter } from 'react-router-dom';
import {withApollo} from 'react-apollo';
import gql from 'graphql-tag';
import * as mutations from "../../src/graphql/mutations";
import * as queries from "../../src/graphql/queries";

const uuid = require('uuidv4');

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {};

    console.log('Home props');
    console.log(props);
  }

  setup() {
    console.log('setup');

    const personOneInput = {
      input: {
        id: uuid(),
        email: 'person1@mail.com',
        name: 'Person One'
      }
    };

    this.addPerson(personOneInput);
  };

  addPerson(input) {
    console.log('addPerson');
    this.props.client.mutate({
      mutation: gql(mutations.createPerson),
      variables: input
    }).then((result) => {
      console.log('createPerson returns');
      console.log(result);
    }).catch((err) => console.error(err));
  };

  addProject(input) {

  };

  addMembership(person, project) {

  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={this.setup.bind(this)}>
          Setup
        </IonButton>
      </IonPage>
    )
  }


}

let component = withApollo(Home);
component = withRouter(component);
export default component;
