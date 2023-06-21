import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/context'
import { app } from './firebase/config';
import Context from './store/context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase:app}}> 
   <Context>
    <App />
   </Context>      
  </FirebaseContext.Provider>
  
);


