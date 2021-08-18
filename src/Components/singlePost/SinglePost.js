import "./singlePost.css";
import singlePostImg from "../../images/254seogeekblog-header-image.jpg";
export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singPostWrapper'>
        <img src={singlePostImg} alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet consectetur
          <div className='singlePostEditContainer'>
            <i className='singlePostIcon far fa-thumbs-up'></i>
            <i className='singlePostIcon fas fa-comments'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Kimura</b>
          </span>
          <span className='singlePostDate'>1 hour ago.</span>
        </div>
        <p className='singlePostDescription'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          laboriosam error possimus explicabo assumenda velit necessitatibus
          obcaecati eos asperiores dolorem! Expedita, impedit sit incidunt cum
          repudiandae modi rem nam voluptatum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor laboriosam error possimus
          explicabo assumenda velit necessitatibus obcaecati eos asperiores
          dolorem! Expedita, impedit sit incidunt cum repudiandae modi rem nam
          voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error possimus explicabo assumenda velit
          necessitatibus obcaecati eos asperiores dolorem! Expedita, impedit sit
          incidunt cum repudiandae modi rem nam voluptatum! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolor laboriosam error possimus
          explicabo assumenda velit necessitatibus obcaecati eos asperiores
          dolorem! Expedita, impedit sit incidunt cum repudiandae modi rem nam
          voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor laboriosam error possimus explicabo assumenda velit
          necessitatibus obcaecati eos asperiores dolorem! Expedita, impedit sit
          incidunt cum repudiandae modi rem nam voluptatum!
        </p>
      </div>
    </div>
  );
}
