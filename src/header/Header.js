import "./Header.css";

import HeaderImg from "../images/254seogeekblog-header-main.jpg";
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>SEO & Web Dev (Reactjs) </span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='HeaderImg'
        src={HeaderImg}
        alt='254seogeekblog-header-image'
      />
    </div>
  );
}
