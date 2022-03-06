import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch,useSelector } from "react-redux";
//import { login, logout } from '../../services/actions/index'
import {RegisterThunk, VerifyCode} from '../api/index'

import { useHistory } from "react-router-dom";

const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function SignUp(props) {
  const dispatch = useDispatch();
  const {register, verifiedUser }=useSelector(state=>state.auth);

  let history = useHistory();
  const [verify, setVerify] = useState(false);
  const [scode, setSCode] = useState(null);

  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword:"",
  });

  const { email, password,confirmPassword } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
   // console.log('Form Data : ',formData);
  }
  const refConfirmPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refConfirmPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
        e.preventDefault();
      // console.log(formData);
      if(formData.password === formData.confirmPassword){
        setFormData(formData);
        //dispatch(login(formData));
        dispatch(RegisterThunk(formData))
        setVerify(true);
     // history.push("/login")
      console.log('Registered',formData);
      }
      
      else{
        alert('Incorect password');
        console.log('before register',formData);
      }
      
    setShowPass(false);
  };
  const handleSubmitverify = (e)=> {
    e.preventDefault();

      dispatch(VerifyCode(scode)) 
      console.log('verifiedUser',verifiedUser)
      if(verifiedUser?.id){
        history.push("/login")
      }
    console.log('verify Code',scode)
  }


  console.log('SignUp',register)
  const canSignUp =
  [email, password, confirmPassword].every(Boolean); 
  return (
    <div className="login-wrapper ">
      
      {
        verify === true ? (
          <>
          <form onSubmit={handleSubmitverify} className="common-background">
          <h2>Verify Your Email</h2>
          <label htmlFor="password">Password:</label>
          <input
            type="text" 
            id="verify"
            name="verify"
            onChange={(e)=>setSCode(e.target.value)}
            value={scode}
            required
          />
          <button className="loginButton" type="submit">
          Verify
        </button>
          </form>
          </>
        ) : (
          
          <form onSubmit={handleSubmit} className="common-background"> 
          <h2>Sign Up</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={hangleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            autoFocus
            required
          />
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            autoComplete
            value={password}
            required
          />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className="eye">
          <input
            ref={refConfirmPassword}
            type="password"
            onChange={hangleChange}
            id="confirmPassword"
            name="confirmPassword"
            autoComplete
            value={confirmPassword}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignUp}>
          Sign Up
        </button>
        </form>
          
        )


      }

      
    
    </div>
  );
}

export default SignUp;
