import React from 'react';
import { IonCardContent,IonCardTitle,IonCardHeader,IonCard,IonButton,IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

export const ListExample: React.FC = () => (
  <IonContent>

        <IonCard class="cardindex">
          <IonCardHeader> 
            <IonCardTitle>Journal Entries</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
           you can view and and reflect on your past journal entries.
          </IonCardContent>
        </IonCard>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>journal entry 1</IonLabel>
        <button ion-button>View</button>
      </IonItem>
      <IonItem>
        <IonLabel>journal entry 2</IonLabel>
        <button ion-button >View</button>
      </IonItem>
      <IonItem>
        <IonLabel>journal entry 3</IonLabel>
        <button ion-button>View</button>
      </IonItem>
      <IonItem>
        <IonLabel>journal entry 4</IonLabel>
        <button ion-button >View</button>
      </IonItem>
      <IonItem>
        <IonLabel>journal entry 5</IonLabel>
        <button ion-button>View</button>
      </IonItem>
    </IonList>

  
    <IonButton color="dark" href="Tab1.tsx">Go Back To Home</IonButton>
  </IonContent>
);