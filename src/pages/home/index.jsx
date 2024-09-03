import { Link } from "react-router-dom";
import Services from "../services";

function Home() {
  const isAuth = false;
  return (
    <div className="mx-auto mt-8 flex w-full justify-center px-4">
      <div className="mf:flex-row flex flex-col items-start justify-between px-2 md:p-20">
        <div className="mf:mr-10 flex flex-1 flex-col items-start justify-start">
          <p className="py-1 text-3xl text-primary-text sm:text-5xl">
            One Stop Solution To Meet{" "}
            <span className="font-semibold text-blue-400">PRO</span>fessionals
            Online
          </p>
          <Link to="/services">
            <button
              type="button"
              className="my-5 flex cursor-pointer flex-row items-center justify-center rounded-xl bg-[#2952e3] p-2 hover:bg-[#2546bd]"
            >
              {isAuth ? (
                <button className="text-base font-semibold text-white">
                  CONNECTED
                </button>
              ) : (
                <p className="text-base font-semibold text-white">
                  Connect with Us
                </p>
              )}
            </button>
          </Link>
        </div>
        <Services />
      </div>
    </div>
  );
}

export default Home;
