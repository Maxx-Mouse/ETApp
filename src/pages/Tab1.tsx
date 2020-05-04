import React from 'react';
import {IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonCard,IonCardHeader,IonCardTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="headT1">
        <IonToolbar >
          <IonTitle class="headT1" >Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="cardindex">
          <IonCardHeader> 
            <IonCardTitle>Welcome to ETApp HomePage</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Here you can make journal entries on how you are feeling. 
            Get tips on how to improve how you are feeling and reflect on your past journals. 
          </IonCardContent>
        </IonCard>
        
        <IonButton color="dark" href="Tab2">Create a New Entry</IonButton>
        <IonButton color="dark" href="Tab4.tsx">View Past Entries</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
