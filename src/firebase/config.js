import firebase from "firebase/app"
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

        // apiKey:'AIzaSyD63VEw_O_t0pmZT186GD9HyuPOTACKOWo',
        // authDomain:'admin-template-1.firebaseapp.com',
        // projectId:'admin-template-1'

    })
}

export default firebase