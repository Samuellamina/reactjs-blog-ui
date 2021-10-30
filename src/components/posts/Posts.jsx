import ".././posts/posts.css";
import FeaturedPost from "../featuredPost/FeaturedPost";
import RecentPosts from "../recentPosts/RecentPosts";

const Posts = () => {
  return (
    <div className="container">
      <FeaturedPost />
      <RecentPosts />
    </div>
  );
};

export default Posts;
