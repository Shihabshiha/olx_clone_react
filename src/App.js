import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext, FirebaseContext } from './store/context';
/**
 * Import Components
 */
import Home from './Pages/Home';
import Create from './Pages/Create';
import View from './Pages/ViewPost';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/viewpost" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

