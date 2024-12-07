import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LatestBlog from "../Components/LatestBlog";
import RecentSection from "../Components/RecentSection";

function Homepage() {
  return (
    <div>
      <Header />
      <LatestBlog />
      <RecentSection />
      <Footer />
    </div>
  );
}

export default Homepage;
