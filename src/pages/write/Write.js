import "./write.css";
import writeImg from "../../images/254seogeekblog-header-image-main.jpg";

export default function Write() {
  return (
    <div className='write'>
      <img src={writeImg} alt='' className='writeImg' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fal fa-plus'></i>
          </label>
          <input type='file' id='fileInput' className='upLoadBtn' />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell Your Story...'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
}
