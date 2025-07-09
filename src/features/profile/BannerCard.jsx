import useGetBanner from "./hooks/useGetBanner";

function BannerCard() {
  const { data } = useGetBanner();
  const banner = data?.[0]?.bannerUrl;
  return (
    <div className="relative mb-6 px-2 sm:px-8">
      <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-opacity-50 p-4 text-center">
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
