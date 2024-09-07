import BannerCard from "../../features/profile/BannerCard";
import ServicesContainer from "../../features/services/ServicesContainer";

function Home() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col justify-center px-4">
      <BannerCard />
      <div className="sm:px-2">
        <h1 className="py-4 text-start font-Alata text-2xl font-normal sm:text-center sm:text-5xl">
          Featured Professionals
        </h1>
        <ServicesContainer />
      </div>
    </div>
  );
}

export default Home;
