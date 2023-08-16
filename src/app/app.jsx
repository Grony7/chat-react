import 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import GlobalStyles from './styles.js';
import Router from '../routes/Routes.jsx';
import {createContext} from 'react';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd5caphkBtvslU0P-_3WIFGRkBEp4sHVk",
  authDomain: "chat-react-5eb4e.firebaseapp.com",
  databaseURL: "https://chat-react-5eb4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-react-5eb4e",
  storageBucket: "chat-react-5eb4e.appspot.com",
  messagingSenderId: "399308845639",
  appId: "1:399308845639:web:6129d2c2a4d7e21912b762",
  measurementId: "G-WFCP05QL7R"
};


const appFirebase = initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = getAuth(appFirebase);
const firestore = getFirestore(appFirebase)


const App = () => {
  return (
    <Context.Provider value={{
      auth,
      firestore
    }}>

      <GlobalStyles/>
      <Router/>
    </Context.Provider>
  );
}

export default App;
