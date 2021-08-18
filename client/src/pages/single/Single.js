import "./single.css";
import SideBar from "../../Components/sidebar/SideBar";
import SinglePost from "../../Components/singlePost/SinglePost";
export default function Single() {
  return (
    <div className='single'>
      <SinglePost />
      <SideBar />
    </div>
  );
}
