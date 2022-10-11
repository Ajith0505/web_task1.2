import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";
import { useFormik } from "formik";
import { Formik } from 'formik';
import { useState } from "react";


const ResetPwdDrawer = () => {
  const isPwdDrawerOpen = useSelector(
    (state) => state.reducers.userprofile.isPwdDrawerOpen
  );
   
 
  
  
  
  
    let drawerClasses = isPwdDrawerOpen ? "side-drawer open" : "side-drawer";
  
    return (
      <div className={drawerClasses}>
    
          <div className="resetpwd-header">
            <div><button className="arrow-resetpwd"><img src="images\arrow-left-s-line.svg" alt="arrow-button" /> </button></div>
            <div><p>Reset Password</p></div>
            <div><button className="cross-resetpwd"> <img src="images\close-line.svg" alt="public\images\close-line.svg" /></button></div>

          </div>
  
  
        </div>
    );
  };
  
  export default ResetPwdDrawer;
  