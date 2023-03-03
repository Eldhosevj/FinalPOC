import React, { Suspense, useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import SelectRoute from "./Components/SelectRoute";
import ErrorBoundary from "./error/ErrorBoundary";
import SideNavBar from "./SidebarNavbar/SideNavBar.jsx";
import HomePage from "./Components/HomePage";
import "@progress/kendo-theme-default/dist/all.css";
import Navbar from "./Navbar/Navbar.jsx";

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const TOKEN_CALLING_STRTERGY="GENERAL"
//const TOKEN_CALLING_STRTERGY="NODE"

  const fetchToken = () => {
    axios
      .get("http://localhost:3000/token")
      .then((res) => {
        if (res && res.data && res.data.token) {
          window.localStorage.setItem("token", res.data.token);
        }
      })
      .catch((error) => {
       console.log("Unable to fetch token")
      });
  };

  const fetchTokenDirectly = async () => {
    try {
      const clientId = "fsams.ro";

      const clientSecret = "secret";

      const username = "FSTNRTESTUSER";

      const password = "P@ssw0rd!@#";

      const data = new URLSearchParams();

      data.append("grant_type", "password");

      data.append("client_id", clientId);

      data.append("client_secret", clientSecret);

      data.append("username", username);

      data.append("password", password);

      const response = await fetch("https://sts-lle.atsol.com/connect/token", {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: data.toString(),
      });

      const tokenData = await response.json();

      if (tokenData) {
        window.localStorage.setItem("token", tokenData);
        return;
      } else {
      }
    } catch (err) {
  console.log("unable to fetch token")
    }
  };
  React.useEffect(()=>{
if(TOKEN_CALLING_STRTERGY=="GENERAL"){
  fetchTokenDirectly()
}
else{
  fetchToken()
}
  },[])

  const navigationClicked = (url) => {
    console.log("I am running", url);
    if (url == "/") {
      history.push("/");
      localStorage.setItem("url", url);
      setRoute(url);
    } else {
      setRoute(url);
      localStorage.setItem("url", url);
      history.push("/Vtrac");
    }
  };
  const [route, setRoute] = useState("null");
  useEffect(() => {
    if (route == "null") {
      const url = localStorage.getItem("url");
      setRoute(url);
    }
  }, []);
  return (
    <>
      <Navbar />
      <SideNavBar navigationClicked={navigationClicked} />
      <Switch>
        {
          <Route path="/" strict exact>
            <HomePage />
          </Route>
        }
        <Route path="/Vtrac" strict exact>
          <SelectRoute url={route} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
