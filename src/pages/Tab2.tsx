import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange, IonCard, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { trash, happy } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
   <IonPage >

      <IonHeader class="head">
              <IonToolbar>
          <IonTitle class="head">How was Your Day Today?</IonTitle>
        </IonToolbar>
      </IonHeader>

          <IonContent>
            <IonCard class="entry">
              <IonList>
                  <IonItem class = "dateEntry">
                      <IonLabel class = "dateEntry2"position="floating">Todays Date:</IonLabel>
                      <IonInput  type="text"></IonInput>
                  </IonItem>

                  <IonItem class="dateEntry" >
                      <IonLabel class="dateEntry2" position="floating">Subject:</IonLabel>
                      <IonInput  type="text"></IonInput>
                  </IonItem>

              </IonList>
              </IonCard>

              <IonItem >


              </IonItem>

              <IonItem >

                  <IonCard class ="feelings">
                   <IonCardTitle>How was Your Day?</IonCardTitle> 
                    </IonCard>

              </IonItem>

              <IonItem >

                  <IonInput  class ="feelings" type="text"></IonInput>

              </IonItem>

              <IonItem >
                  
                  <IonButton class ="icon" ><IonIcon  icon={happy}></IonIcon></IonButton>
                  
                  <IonButton class ="icon"><IonIcon icon={trash}></IonIcon></IonButton>
              </IonItem>
          </IonContent>

    </IonPage>
  );
};
//trash, addcircle/ happy icons for add delete.
//Floating input for date and subject labels
//placeholder label for "How is your day?" text feature
//SQLite to hold the text database
//sort and display all in a list in order of date (Newest to oldest)
//<IonHeader collapse="condense">
//<IonToolbar>
//    <IonTitle size="large">Journal Entries</IonTitle>
//</IonToolbar>
//        </IonHeader >
//    <ExploreContainer name="Journal" /> 

export default Tab2;
