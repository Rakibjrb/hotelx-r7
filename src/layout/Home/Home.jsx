import Banner from "../../components/homeComponents/Banner/Banner";
import FeaturedRooms from "../../components/homeComponents/FeaturedRooms/FeaturedRooms";
import Newsletter from "../../components/homeComponents/Newsletter/Newsletter";
import Testimonials from "../../components/homeComponents/Testimonials/Testimonials";
import TopServices from "../../components/homeComponents/TopServices/TopServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopServices />
      <FeaturedRooms />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
