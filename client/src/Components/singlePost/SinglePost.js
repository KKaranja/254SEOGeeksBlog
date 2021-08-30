import { useEffect, useState, useContext } from "react";

import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

const api = axios.create({
  baseURL: `http://localhost:5000/server/`,
});

export default function SinglePost() {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await api.get("posts/" + path);
      // console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  // console.log(user);
  // console.log(user.username === post.username);

  return (
    <div className='singlePost'>
      <div className='singPostWrapper'>
        {post.photo && (
          <img
            src={publicFolder + post.photo}
            alt=''
            className='singlePostImg'
          />
        )}

        <h1 className='singlePostTitle'>
          {post.title}
          {post.username === user?.username && (
            <div className='singlePostEditContainer'>
              <i className='singlePostIcon fas fa-edit'></i>
              <i
                className='singlePostIcon fas fa-trash-alt'
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
