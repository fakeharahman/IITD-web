import { Box } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import LoggedInModal from "../../Components/LoggedInModal/LoggedInModal";
import SignInForm from "../../Components/SiginInForm/SignInForm";

// Container to hold the signin page

export default function SignIn() {
  const [tabValue, setTabValue] = useState("signup");
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [authData, setAuthData] = useState({ token: null, userId: null });
  const [modalOpen, setModalOpen] = useState(false);
  const onTabChange = (e, val) => {
    setError(null);
    setTabValue(val);
  };
  const onTextChange = (e) => {
    const updatedUserData = { ...userData, [e.target.name]: e.target.value };
    setUserData(updatedUserData);
  };
  const onModalToggle = () => {
    if(modalOpen){
      const authData={ token: null, userId: null }
      setAuthData(authData)
    }
    setModalOpen(!modalOpen);
  };
  const onSignIn = () => {
    const authData = { ...userData, returnSecureToken: true };
    console.log(authData);
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCih9ssBS7ViTxx7B-wuxf8WV2gAzY4AKQ";
    if (tabValue === "login") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCih9ssBS7ViTxx7B-wuxf8WV2gAzY4AKQ";
    }
    axios
      .post(url, authData)
      .then((res) => {
        console.log(res);
        const data = { token: res.data.idToken, userId: res.data.localId };
        setAuthData(data);
        console.log(data);
        setError(null);
        onModalToggle();
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        console.log(err.response);
        setError(err.response.data.error.message);
      });
  };
  return (
    <Box
      height="calc( 100vh - 64px )"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SignInForm
        tabValue={tabValue}
        onTabChange={onTabChange}
        onTextChange={onTextChange}
        userData={userData}
        onSignIn={onSignIn}
        error={error}
      />
      <LoggedInModal modalOpen={modalOpen} onModalToggle={onModalToggle} authData={authData} />
    </Box>
  );
}
