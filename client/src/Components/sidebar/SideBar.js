import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img
          src='https://avatars.githubusercontent.com/u/37881972?v=4'
          alt='Isaac Karanja Kimura - SEO expert and Javascript developer'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          magnam iure! Incidunt modi quod
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>Follow Me</div>
      <div className='sidebarSocial'>
        <i className='sidebarSocialIcons fab fa-facebook-square'></i>
        <i className='sidebarSocialIcons fab fa-twitter-square'></i>
        <i className='sidebarSocialIcons fab fa-linkedin-in'></i>
        <i className='sidebarSocialIcons fab fa-github-square'></i>
      </div>
    </div>
  );
}
