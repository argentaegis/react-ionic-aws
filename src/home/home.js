import React, { Component } from 'react';
import {
  IonPage,
  IonHeader,
  IonTitle,
} from '@ionic/react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <ionToolbar>
            <IonTitle>Home</IonTitle>
          </ionToolbar>
        </IonHeader>
      </IonPage>
    )
  }


}

export default compose(
  withRouter,
)(Home);
