import { useState } from "react";
import logo from  "../assets/images/food-delivery.jpg"
import { Link } from "react-router-dom";

const loggedInUser = () => {

  return true;

} 


export const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={logo}
      />
    </a>
  );


  const Header = () => {
     const [isLoggedin, setIsLoggedIn] = useState(false)

    const[ title, setTitle] = useState("Food Villa")
    return (
      <div className="header">
        {Title()}
     
        <div className="nav-items">
          <nav className="nav-container">  

          <ul className="right-side">
            <Link to= "/">  
            <li>Home</li>
            </Link>

            <Link to="/about">   
            <li>About</li>
            </Link>

            <Link to="/Contact">
            <li className="left-side">Contact Us</li>
            </Link>
            <Link> 
            <li>Cart</li>
            </Link>
          </ul> 
          </nav>
        </div>
               {isLoggedin ? (
                 <button onClick={() => setIsLoggedIn(false)}> logOut</button>

               ):(
                <button onClick={() => setIsLoggedIn(true)}> logIn</button>
               )

               }
      </div>
    );
  };


  export default Header;