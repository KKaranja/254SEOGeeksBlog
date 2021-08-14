import React from "react";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className='topBar'>
      <div className='topLetf'>
        <i className='topSocialIcons fab fa-facebook-square'></i>
        <i className='topSocialIcons fab fa-twitter-square'></i>
        <i className='topSocialIcons fab fa-linkedin-in'></i>
        <i className='topSocialIcons fab fa-github-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>New Blog</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='TopProfileImg'
          src='https://avatars.githubusercontent.com/u/37881972?v=4'
          alt='Isaac Karanja Kimura - SEO expert and Javascript developer'
        />
        <i className='TopSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}
