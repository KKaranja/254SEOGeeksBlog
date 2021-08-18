import "./SideBar.css";

export default function SideBar() {
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
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sports</li>
          <li className='sidebarListItem'>Tech</li>
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
