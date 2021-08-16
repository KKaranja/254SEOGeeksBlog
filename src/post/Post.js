import "./Post.css";
import PostImg from "../images/254seogeekblog-header.jpg";

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={PostImg} alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDescription'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
        temporibus id perferendis quidem doloribus illo voluptas ratione, nam
        eaque natus accusamus omnis vero beatae esse et facere tempore explicabo
        laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
        temporibus id perferendis quidem doloribus illo voluptas ratione, nam
        eaque natus accusamus omnis vero beatae esse et facere tempore explicabo
        laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
        temporibus id perferendis quidem doloribus illo voluptas ratione, nam
        eaque natus accusamus omnis vero beatae esse et facere tempore explicabo
        laborum!
      </p>
    </div>
  );
}
