import BannerCard from "../../features/profile/BannerCard";
import ServicesContainer from "../../features/services/ServicesContainer";
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col justify-center px-4">
      <Helmet>
            <meta charSet="utf-8" />
            <title>Hexpertify-Online Consulting</title>    
            <meta name="description" content="Hexpertify consulting Platform" />
            <meta name="keywords" content="Online Consulting, Hexpertify, Consulting, About Hexpertify" />
      </Helmet>
      <BannerCard />
      <div className="sm:px-2">
        <h1 className="py-4 text-start font-Alata text-2xl font-normal sm:text-center sm:text-5xl">
          Featured Services
        </h1>
        <ServicesContainer />
      </div>
    </div>
  );
}

export default Home;
