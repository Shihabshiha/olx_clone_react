import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/context";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const db = getFirestore(firebase);
    let user;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        user = result.user;
        return updateProfile(auth.currentUser, { displayName: userName });
      })
      .then(() => {
        console.log("Profile updated successfully");
        return addDoc(collection(db, "users"), {
          id: user.uid,
          username: userName,
          phone: phone,
        });
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Olx logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
