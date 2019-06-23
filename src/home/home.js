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

    const personTwoInput = {
      input: {
        id: uuid(),
        email: 'person2@mail.com',
        name: 'Person Two'
      }
    };

    const projectOneInput ={
      input: {
        id: uuid(),
        name: 'Project One',
      }
    }

    let person1;

    this.addPerson(personOneInput).then( (rval) => {
      person1 = rval;
      this.addProject(projectOneInput).then((project1) => {

        this.addMembership(person1, project1);
      });
    });
    this.addPerson(personTwoInput);
  };

  async addPerson(input) {
    console.log('addPerson');
    let rval;
    await this.props.client.mutate({
      mutation: gql(mutations.createPerson),
      variables: input
    }).then((result) => {
      console.log('createPerson returns');
      console.log(result);
      rval = result;
    }).catch((err) => console.error(err));

    return rval.data.createPerson;
  };

  async addProject(input) {
    console.log('addProject');
    let rval;

    await this.props.client.mutate({
      mutation: gql(mutations.createProject),
      variables: input
    }).then((result) => {
      console.log('createProject returns');
      console.log(result);
      rval = result;
    }).catch((err) => console.error(err));

    return rval.data.createProject;
  };

  async addMembership(person, project) {
    console.log('addMembership');
    console.log(person);
    console.log(project);
    const input = {
      input: {
        id: uuid(),
        projectMembershipPersonId: person.id,
        projectMembershipProjectId: project.id
      }
    };

    return await this.props.client.mutate({
      mutation: gql(mutations.createProjectMembership),
      variables: input
    }).then((result) => {
      console.log('create membership returns');
      console.log(result);
    }).catch((err) => console.error(err));
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
