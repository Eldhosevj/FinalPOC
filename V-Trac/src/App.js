import React from "react";
import "./App.scss";
import "@progress/kendo-theme-default/dist/all.css";

import VtracPage from "./components/Pages/VtraceDataPage";
import Navbar from "./Navbar/Navbar.jsx";
const TOKEN_CALLING_STRTERGY="GENERAL"
//const TOKEN_CALLING_STRTERGY="NODE"
const App = () => {
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
  return (
    <div className="App">
      <Navbar />
      <VtracPage />
    </div>
  );
};

export default App;
// --testing the code
