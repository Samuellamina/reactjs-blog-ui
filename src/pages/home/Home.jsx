import Posts from "../../components/posts/Posts";
import Title from "../../components/title/Title";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";
import Post from "../../components/post/Post";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Title />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
