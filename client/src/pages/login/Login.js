import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className='login'>
      <pan className='loginTitle'>Login</pan>
      <form className='loginForm'>
        <label>Email</label>
        <input type='text' placeholder='Enter Your email...' />
        <label>Password</label>
        <input type='password' placeholder='Enter Your password...' />
        <button className='loginBtn'>Login</button>
      </form>
      <button className='loginRegisterBtn'>
        <Link className='link' to='/register'>
          Register
        </Link>
      </button>
    </div>
  );
}
