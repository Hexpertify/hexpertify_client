import BannerCard from "../../features/profile/BannerCard";
import ServicesContainer from "../../features/services/ServicesContainer";
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col justify-center px-4">
      <Helmet>
            <meta charSet="utf-8" />
            <title>Hexpertify-Consult CERTIFIED Experts Online</title>    
            <meta name="description" content="Hexpertify consulting Platform" />
            <meta name="keywords" content="Online Consulting, Hexpertify, Consulting, About Hexpertify" />
      </Helmet>
      <BannerCard />
      <div className="sm:px-2">
        <h1 className="sr-only">
  Consult Certified Experts from various fields | Hexpertify
</h1>
<h2 className="py-4 text-start font-Alata text-2xl font-normal sm:text-center sm:text-5xl">
  Featured Services
</h2>
        <ServicesContainer />
      </div>
    </div>
  );
}

export default Home;
