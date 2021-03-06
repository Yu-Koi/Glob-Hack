import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from "./BackEnd/firebase";
import CreateAccount from "./Components/CreateAccount.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import LeafMap from "./Components/LeafMap"
import WhatDoYouNeed from "./Components/WhatDoYouNeed";
import MedicalRecord from "./Components/MedicalRecord";
import Programming from "./Components/Programming";
import MapEnd from "./Components/MapEnd";
import Admin from "./Components/Admin";

function App() {

  const [firebaseUser, setfirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        setfirebaseUser(user)
      }
    })

  }, [])



  return (
   <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <CreateAccount />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/map">
            <LeafMap />
          </Route>

          <Route path="/need">
            <WhatDoYouNeed />
          </Route>
          <Route path="/MedicalRecord">
            <MedicalRecord />
          </Route>
          
          <Route path="/Programming">
            <Programming />
          </Route>

          <Route path="/mapend">
            <MapEnd />
          </Route>

          <Route path="/admi">
            <Admin />
          </Route>

        </Switch>
      </Router>
      
      </div>
   
  );
}

export default App;
