import useGetBanner from "./hooks/useGetBanner";

function BannerCard() {
  const { data } = useGetBanner();
  const banner = data?.bannerUrl;
  return (
    <div className="relative mb-6 px-2 sm:px-8">
      <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-opacity-50 p-4 text-center">
        <h1 className="absolute inset-0 m-auto flex h-32 w-64 items-center justify-center font-Akshar text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl"></h1>
      </div>
      <img
        src={banner ?? "./background.jpg"}
        alt="background"
        className="aspect-video h-48 w-full rounded-3xl object-cover shadow-lg sm:h-64"
      />
    </div>
  );
}

export default BannerCard;
