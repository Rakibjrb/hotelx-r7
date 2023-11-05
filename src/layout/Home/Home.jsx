import Banner from "../../components/homeComponents/Banner/Banner";
import Newsletter from "../../components/homeComponents/Newsletter/Newsletter";
import Testimonials from "../../components/homeComponents/Testimonials/Testimonials";
import TopServices from "../../components/homeComponents/TopServices/TopServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopServices />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
