import React, { useState } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState([{ email: "", password: "" }]);

  

  function updateUser(e) {
    // console.log(e.target.name)
    // console.log(e.target.value)

    let key = e.target.name;
    setUser({ ...user, [key]: e.target.value });
  }



   function implimentLogin(e){
    e.preventDefault()

    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);
   
}

  return (
    <div className="App">
      <div className="style">
    
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
