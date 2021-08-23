import { useRef, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/server/`,
});

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await api.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  // console.log(user);

  return (
    <div className='login'>
      <pan className='loginTitle'>Login</pan>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' placeholder='Enter Your Username...' ref={userRef} />
        <label>Password</label>
        <input
          type='password'
          placeholder='Enter Your password...'
          ref={passwordRef}
        />
        <button className='loginBtn' type='submit' disabled={isFetching}>
          Login
        </button>
      </form>
      <button className='loginRegisterBtn'>
        <Link className='link' to='/register'>
          Register
        </Link>
      </button>
    </div>
  );
}
