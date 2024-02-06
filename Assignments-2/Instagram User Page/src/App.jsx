import { useState } from "react";
import logo from "./assets/instagram.png";
import "./App.css";

function App() {
  const [login, setlogin] = useState(true);

  const handleClicked = () => {
    setlogin(!login);
  }
  return (
    <div id="container">
      <div id="user">
        <img src={logo} alt="" />
        <input hidden={login} type="text" placeholder="Mobile Number or Email" />
        <input  hidden={login} type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone number, username , or Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleClicked} > {login?"Sign in":"Sign up"}</button>

        <div id="footer">
        {login?"Don't have account?":"have an account?"} <span onClick={handleClicked}>{login?"Sign up":"Log in"}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
