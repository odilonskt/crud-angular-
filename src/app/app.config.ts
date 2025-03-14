import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { routes } from './app.routes';

import { environment } from './environment/firebase.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),provideFirebaseApp(() => initializeApp(environment)),
    // provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]

};
