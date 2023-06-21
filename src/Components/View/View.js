import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import "./View.css";
import { PostContext } from "../../store/postContext";
import { FirebaseContext } from "../../store/context";

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  const db = getFirestore();

  useEffect(() => {
    const { userId } = postDetails;
    const q = query(collection(db, "users"), where("id", "==", userId));
    const querySnapshot = getDocs(q);
    querySnapshot.then((snapshot) => {
      snapshot.forEach((doc) => {
        setUserDetails(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
    });
  }, []);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails && postDetails?.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails && postDetails?.price}</p>
          <span>{postDetails && postDetails?.name}</span>
          <p>{postDetails && postDetails?.category}</p>
          <span>{postDetails && postDetails?.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails?.username}</p>
          <p>{userDetails?.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
