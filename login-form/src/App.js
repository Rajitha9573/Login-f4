import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [user, setUser] = useState([{ email: "", password: "" }]);

  const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

  function updateUser(e) {
    // console.log(e.target.name)
    // console.log(e.target.value)

    let key = e.target.name;
    setUser({ ...user, [key]: e.target.value });
  }



  async function implimentLogin(e){
    e.preventDefault()

    // if(!user.email || !user.password){
    //     setError("All fields are required")
    //     setSuccess("")
    //     return;
    // }
    try{
        let response=await axios.post("https://dummyjson.com/auth/login",{username:user.email,password:user.password},)
        console.log(response.data)
        console.log(response.data.email)
        // localStorage.setItem("user",JSON.stringify(response.data))
        localStorage.setItem("user",JSON.stringify(response.data))
            setSuccess("Succesfullyloggedin")
      

    }
    catch(e){
        setError(e.message)
    }
   
}

  return (
    <div className="App">
      <div className="style">
      {error?<p>{error}</p>:<p>{success}</p>}
        <form className="form" onSubmit={implimentLogin}>
          <p>Welcome back! 👋</p>
          <h2>Sign in to your account</h2>

          <label> Your email</label>
          <br />
          <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={updateUser} />
          <br />

          <label>Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={updateUser}
          />

          <button type="submit" id="btn">
            CONTINUE
          </button>
          <p>Forget your password?</p>
        </form>
        

      </div>
    </div>
  );
}

export default App;
