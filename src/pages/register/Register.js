import { Link } from "react-router-dom";
import "./register.css";

import "./register.css";

export default function Register() {
  return (
    <div className='register'>
      <pan className='registerTitle'>Register</pan>
      <form className='registerForm'>
        <label>Username</label>
        <input type='text' placeholder='Enter Your username...' />
        <label>Email</label>
        <input type='text' placeholder='Enter Your email...' />
        <label>Password</label>
        <input type='password' placeholder='Enter Your password...' />
        <button className='registerBtn'>Register</button>
      </form>
      <button className='registerLoginBtn'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
    </div>
  );
}
