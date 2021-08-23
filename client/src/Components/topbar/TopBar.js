import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='topBar'>
      <div className='topLetf'>
        <div className='tool-tip'>
          <i className='topSocialIcons  fab fa-facebook-square'></i>
          <p className='tool-tip__info'>
            <span className='info'>
              <span className='info__title'>Facebook</span>
            </span>
          </p>
        </div>
        <div className='tool-tip'>
          <i className='topSocialIcons fab fa-twitter-square'></i>
          <p className='tool-tip__info'>
            <span className='info'>
              <span className='info__title'>Twitter</span>
            </span>
          </p>
        </div>
        <div className='tool-tip'>
          <i className='topSocialIcons fab fa-linkedin-in'></i>
          <p className='tool-tip__info'>
            <span className='info'>
              <span className='info__title'>Linkedin</span>
            </span>
          </p>
        </div>
        <div className='tool-tip'>
          <i className='topSocialIcons fab fa-github-square'></i>
          <p className='tool-tip__info'>
            <span className='info'>
              <Link className='link' to='https://github.com/KKaranja'>
                <span className='info__title'>Github</span>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              About
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              Contact
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              New Blog
            </Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img
            className='TopProfileImg'
            src={user.profilePic}
            alt='Isaac Karanja Kimura - SEO expert and Javascript developer'
          />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        )}

        <i className='TopSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}
