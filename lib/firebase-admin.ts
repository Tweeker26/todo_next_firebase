import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    // databaseURL: 'https://feedback-test-a7c2d.firebaseio.com',
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
