import firebaseServer from 'firebase-admin';

const serverFirebaseConfig = {
  credential: admin.credential.cert({
    type: process.env.NEXT_PUBLIC_TYPE,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    privateKeyId: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
    clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    authUri: process.env.NEXT_PUBLIC_AUTH_URI,
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    authProviderX509CertUrl: process.env.NEXT_PUBLIC_AUTH_PROVIDER_X509_CERT_URL,
    tokenUri: process.env.NEXT_PUBLIC_TOKEN_URI,
    clientX509CertUrl: process.env.NEXT_PUBLIC_CLIENT_X509_CERT_URL
  })
};

const app = firebaseServer.apps.length
    ? firebaseServer.app()
    : firebaseServer.initializeApp(serverFirebaseConfig)

export default firebaseServer

