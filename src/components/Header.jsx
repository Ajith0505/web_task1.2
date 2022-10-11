import React from "react";
import Img from "./Img";
import Location from "./location";
import Searchitem from "./searchItem";
import Signin_up from "./SignIn_up";
import Create from "./create";
import { useSelector } from 'react-redux'
import Profileicons from "./Profileicons";

function Header(props) {
  const isloggedin  = useSelector(
    (state) => state.reducers.login.isloggedin
);
  return (<div className="header-img">
    <Img />
    <Location />
    <Searchitem />
    <div className="button-wrapper constant-width">
    {true?<Profileicons />:<Signin_up onSignup={props.onSignup}/>}
    <Create />
    </div>
  </div>
  );
}

export default Header;
