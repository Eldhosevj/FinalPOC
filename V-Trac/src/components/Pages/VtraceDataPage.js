import React,{useState} from "react";
import Logs from '../Logs/Logs';
import Reports from '../Reports/Reports';

import WelcomePage from '../WelcomeVtracData/WelcomeVtracData';
import SideNavBar from '../SidebarNavbar/SideNavBar.jsx';
import Orders from '../Orders/Oders.jsx';
const VtracDataPage=()=>{
  const [route, setRoute] = useState("null");
  const token=window.localStorage.getItem("token")


    const navigationClicked = (url) => {
        setRoute(url)
      };
      const component = (url) => {
        if (url == "/Orders") {
          return (
              <Orders token={token}/>
          );
          }
        if (url == "/Logs") {
          return (
              <Logs token={token}/>
          );
          }
        if (url == "/Reports") {
          return (
              <Reports token={token}/>
          );
          }
        else{
            return (
                <WelcomePage/>
            )
        }

      };
    return(
   <>
   <SideNavBar navigationClicked={navigationClicked}/>
   {component(route)}
   </>
    )
}
export default VtracDataPage