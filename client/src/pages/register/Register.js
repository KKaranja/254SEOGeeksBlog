import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

import "./register.css";

const api = axios.create({
  baseURL: `http://localhost:5000/server/`,
});

export default function Register() {
  const [usename, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await api.post("/auth/register", {
        usename,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <pan className='registerTitle'>Register</pan>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          placeholder='Enter Your username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type='text'
          placeholder='Enter Your email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter Your password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='registerBtn' type='submit'>
          Register
        </button>
      </form>
      <button className='registerLoginBtn'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
      {error && <span>Something went wrong...</span>}
    </div>
  );
}
