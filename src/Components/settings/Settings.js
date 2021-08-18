import SideBar from "../sidebar/SideBar";
import "./settings.css";

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label> Profile Picture</label>
          <div className='settingsProfilePic'>
            <img
              src='https://avatars.githubusercontent.com/u/37881972?v=4'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fas fa-user-circle'></i>
            </label>
            <input className='upLoadBtn' type='file' id='fileInput' />
          </div>
          <label>Username </label>
          <input type='text' placeholder='Kimura' />
          <label>Email </label>
          <input type='email' placeholder='kimura@gmail.com' />
          <label>Password </label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
