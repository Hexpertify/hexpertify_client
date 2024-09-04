import Services from "../services";

function Home() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col justify-center px-4">
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-opacity-50 p-4 text-center">
          <h1 className="absolute inset-0 m-auto flex h-32 w-64 items-center justify-center font-Akshar text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-7xl"></h1>
        </div>
        <img
          src="./background.jpg"
          alt="background"
          className="h-64 w-full rounded-lg object-cover shadow-lg"
        />
      </div>
      <Services />
    </div>
  );
}

export default Home;
