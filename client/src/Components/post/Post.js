import "./Post.css";
import PostImg from "../../images/254seogeekblog-header.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className='post'>
      {post.photo && <img className='postImg' src={post.photo} alt='' />}
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}
        </div>
        <Link className='link' to={`post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </Link>

        {/* <hr /> */}
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='postDescription'>{post.description}</p>
    </div>
  );
}
