import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (

    <IonPage>

      <IonHeader class="head">
        <IonToolbar>
          <IonTitle class="head">Tips and Tricks</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
      <IonCard class="anx-card">
          <IonCardHeader>
            <IonCardSubtitle>Deep Breathing</IonCardSubtitle>
            <IonCardTitle >Breathe the Rainbow</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Take slow deep breaths and think about your 
            favorite things to match each color of the rainbow
      </IonCardContent>
        </IonCard>

        <IonCard class="anx-card">
          <IonCardHeader>
            <IonCardSubtitle>Deep Breathing</IonCardSubtitle>
            <IonCardTitle >Breath 4 Breath</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Close your eyes and breathe in slowly while counting to 4.
            Hold the breath while you count to 4 again then slowly exhale while counting to 4. 
            Hold it for 4 more counts and repeat until you feel calm. 
            Try to keep an even pace that you feel comfortable with.
      </IonCardContent>
        </IonCard>

        <IonCard class="anx-card">
          <IonCardHeader>
            <IonCardSubtitle>Relaxation Kit</IonCardSubtitle>
            <IonCardTitle >Stim Kit</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            You can make a stimulation kit to keep at home or even a 
            little carry along kit to keep in your bag
            Things you might want to include are fidget toys, 
            a mini sandbox, clay, books, magnetic sand, 
            stuffed animals or squishy toys,
            some kind of sweet snack, we suggest a bit of chocolate!
      </IonCardContent>
        </IonCard>

        <IonCard class="anx-card">
          <IonCardHeader>
            <IonCardSubtitle>Progressive Muscle Relaxation</IonCardSubtitle>
            <IonCardTitle >Tense up Calm Down</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            It's common for muscles to tense involintarily during anxiety attacks 
            This trick helps take back some of that controll
            Tense up a specific muscle group (like your arms and hands or your neck and shoulders)
            hold for a count of 3 or 4 and then relax the muscles. You can work head to toe or 
            toes to head but it's better to work in a linear fashion.
      </IonCardContent>
        </IonCard>

        <IonCard class="anx-card">
          <IonCardHeader>
            <IonCardSubtitle>Talk Back</IonCardSubtitle>
            <IonCardTitle>Character Talk</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          When negative thoughts start creeping in it can be helpful to talk back to.
            For younger children it can be helpful to create a character for them to tie the negative thoughts to and talk back to them.
            Not in an argumentative way though. Acknowledge thought the thought and find reasons to disagree with the thought.
            
           </IonCardContent>
        </IonCard>

        <IonCard class="anx-card">
          <IonCardHeader>
            <IonCardSubtitle>Talk Back</IonCardSubtitle>
            <IonCardTitle>Send It Down the River</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Imagine a river and that the negative thoughts are flowing through a damn one at a time
          You look at each one that flows down the river you stop it and find at least two reasons why the thught isn't true
          and send it down the river.
           </IonCardContent>
        </IonCard>

        
     </IonContent> 


    </IonPage>
  );
};

export default Tab3;
