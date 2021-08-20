import { useState, useEffect } from "react";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import SideBar from "../../Components/sidebar/SideBar";
import "./Home.css";
import { useLocation } from "react-router-dom";

import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:5000/server/`,
});

export default function Home() {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get("/posts");
      console.log(res);
      // setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
