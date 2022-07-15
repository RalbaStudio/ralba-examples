// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'transaction-92dad',
    appId: '1:331261813374:web:b50fbc70c0f94fa5f92e2f',
    databaseURL: 'https://transaction-92dad-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'transaction-92dad.appspot.com',
    locationId: 'europe-central2',
    apiKey: 'AIzaSyCFgLCP02GmFr_FBC5BqrK5c8up1I2kiPQ',
    authDomain: 'transaction-92dad.firebaseapp.com',
    messagingSenderId: '331261813374',
  },
  production: false,
  config: 'appconfig.json',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
