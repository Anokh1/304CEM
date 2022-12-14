import { useState } from "react"; 
import './css/Login.css'; 

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({
        email,
        password,
      }), 
    })

    const data = await response.json()

    if(data.user){
      localStorage.setItem('token', data.user)
      localStorage.setItem('userEmail', email) // store the email for user to favorite Pokemon or Digimon
      // console.log(data.user); 
      alert('Login successful')
      window.location.href = '/dashboard'
    } else{
      alert('Incorrect username or password')
    }

    // console.log(data); 
  }

  return (
    <div class="loginContainer">
      <h1>Login</h1>
      <div class="loginForm">
        <form onSubmit={loginUser}>
          <input class="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email" 
          />
          <br />
          <input class="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password" 
          />
          <br />
          <input class="submitButton" type="submit" value="Login" />
      </form>
    </div>
  </div>
  )
  
}

export default App;

// issues in minute solution: https://github.com/web3/web3.js#troubleshooting-and-known-issues