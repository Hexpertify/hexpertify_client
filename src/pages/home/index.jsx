import BannerCard from "../../features/profile/BannerCard";
import ServicesContainer from "../../features/services/ServicesContainer";

function Home() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col justify-center px-4">
      <BannerCard />
      <div className="sm:px-2">
        <h1 className="py-4 text-start font-Alata text-3xl font-normal md:text-5xl">
          Featured Services
        </h1>
        <ServicesContainer />
      </div>
    </div>
  );
}

export default Home;
