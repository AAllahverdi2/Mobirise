import Services from "../../components/Services";
import OurTeam from "../../components/OurTeam/OurTeam";
import Banner from "../../components/Banner";
import Message from "../../components/Message";
import OurClient from "../../components/OurClient";
import Find from "../../components/Find";
import Products from "../../components/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Products />
      <OurTeam />
      <Message />
      <OurClient />
      <Find />
    </div>
  );
};

export default Home;
