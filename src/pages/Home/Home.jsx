
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <div className="mx-5">
     <Helmet>
        <title>Home | Gadjet Heaven</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
