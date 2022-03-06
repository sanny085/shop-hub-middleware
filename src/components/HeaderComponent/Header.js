import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState, useEffect } from "react";
import {Link,NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

function Header(){
  const {loginUser} = useSelector(state=> state.auth)
   

  
  console.log('Header 2', loginUser)
  function overlay(isShow){
    var elm = document.querySelector('#overlay');
    if (isShow) {
      elm.style.display = 'block';
  document.querySelector('body').style.overflow='hidden';
    } else {
      elm.style.display = 'none';
  document.querySelector('body ').style.overflow='visible';

    }
  }
  function openSidebar(){
    overlay(true);
    document.querySelector(".nav-links").style.width = "20rem";
  }
  
  
  function closeSidebar() {
    overlay(false);
    document.querySelector(".nav-links").style.width = "0";
  }

const width=[991];
function resizefn(){
if(window.innerWidth<=width[0]){
  closeSidebar();
}
else{
  return
}
}

  return(
<header className="header">
      <Link exact to="/" className="brand-logo">
        <div className="logo">
          <div className="dots">
            <div className="first-dot">&#9632;</div>
            <div>&#9632;</div>
            <div>&#9632;</div>
            <div>&#9632;</div>
          </div>
        </div>
        <div className="brand-name"><p>shophub</p></div>
      </Link>
      <nav>
        <button onClick={openSidebar} id="sidebar" className="hamburger-icon">
        <FontAwesomeIcon icon={['fas','bars']}/>
        </button>
        <div
          id="overlay"
        onClick={closeSidebar}
        onTouchStart={closeSidebar}
        onScroll={closeSidebar}
        ></div>
        <div className="nav-links">
          <button className="sidebarCloseButton" onClick={closeSidebar}>
          <FontAwesomeIcon icon={['fas','times']}/>
          </button>
              
            <NavLink onClick={resizefn} exact to="/" className="nav-link">Home</NavLink>
            <NavLink onClick={resizefn} to="/shop" className="nav-link">Shop</NavLink>
            <NavLink onClick={resizefn} to="/blog" className="nav-link">Blog</NavLink>
            <NavLink onClick={resizefn} to="/contact" className="nav-link">Contact</NavLink>
             { loginUser?.Id  ? (
           <>
           <NavLink onClick={resizefn} to="/exam" className="nav-link">Exam</NavLink>
           <NavLink onClick={resizefn} to="/myaccount" className="nav-link">My Account</NavLink>
           <NavLink onClick={resizefn} to="/logout" className="nav-link">Logout</NavLink>
         
           </>
            ):(
              <>
              <NavLink onClick={resizefn} to="/login" className="nav-link">Login</NavLink>
              <NavLink onClick={resizefn} to="/signup" className="nav-link">SignUp</NavLink>
           
              </>
            )
          }
           </div>
      </nav>
      <div className="cart">
        <span className="total">$320</span>
        <div className="cart-icon">
          <Link to="/cart" className="cart-button">
            <span  aria-label="shopping cart" role="img"> <FontAwesomeIcon icon={['fas','shopping-bag']}/></span></Link>
             <span className="badge">2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;