import { useEffect, useState } from "react";

import "./singlePost.css";
import singlePostImg from "../../images/254seogeekblog-header-image.jpg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:5000/server/`,
});

export default function SinglePost() {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await api.get("posts/" + path);
      // console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className='singlePost'>
      <div className='singPostWrapper'>
        {post.photo && (
          <img src={post.photo} alt='' className='singlePostImg' />
        )}

        <h1 className='singlePostTitle'>
          {post.title}
          <div className='singlePostEditContainer'>
            <i className='singlePostIcon far fa-thumbs-up'></i>
            <i className='singlePostIcon fas fa-comments'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author:
            <Link className='link' to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className='singlePostDescription'>{post.description}</p>
      </div>
    </div>
  );
}
