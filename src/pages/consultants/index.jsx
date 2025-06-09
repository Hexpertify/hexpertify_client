import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { useAuthContext } from "../../contexts/AuthContext ";
import BackButton from "../../components/Button/BackButton";
import useServiceDetails from "./hooks/useConsultantDetails";
import BookConsultant from "../../features/consultants/BookConsultant";

function Consultant() {
  const { id: serviceId, consultantId } = useParams();
  const { data } = useServiceDetails({ id: consultantId });

  const {
    name = "Consultant",
    ratings = 0,
    about = "About Consultant",
    imageURL = "https://via.placeholder.com/150",
    isCertified = false,
    fees = 0,
    certificationURL = "https://via.placeholder.com/150",
    experience: { year = 0, month = 0 } = {},
  } = data || {};
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12">
      <Helmet>
            <meta charSet="utf-8" />
            <title>Hexpertify-Consultants</title>    
            <meta name="description" content="Book appointment" />
            <meta name="keywords" content="Online Consulting, Hexpertify, Consulting, Booking, Book Appointments" />
      </Helmet>
      <div className="my-4 flex items-center gap-4 lg:gap-6">
        <BackButton />
        <h1 className="text-2xl font-semibold text-primary-text md:text-3xl">
          Book Appointment
        </h1>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row lg:gap-8">
        <div className="flex w-full flex-col items-center sm:w-1/2 lg:w-1/3">
          <div className="relative w-full">
            {isCertified && (
              <div className="absolute right-4 top-4 rounded-lg bg-primary-button-color px-3 py-1 text-sm font-medium text-white shadow-md">
                Certified
              </div>
            )}
            <img
              className="h-64 w-full rounded-xl object-cover shadow-lg sm:h-80 md:h-96 lg:h-full"
              src={imageURL}
              alt={`Profile picture of ${name}`}
            />
            <div className="mt-5 hidden sm:flex sm:items-center sm:justify-between">
              <p className="text-xl font-semibold text-primary-text md:text-2xl">
              Fees: {fees == 0 ? "Free" : `₹${fees}`}
              </p>
              {isAuthenticated ? (
                <BookConsultant
                  consultantId={consultantId}
                  serviceId={serviceId}
                />
              ) : (
                <Link
                  className="hover:bg-primary-button-hover rounded-lg bg-primary-button-color px-6 py-3 text-lg font-semibold text-white transition-colors duration-300"
                  to="/login"
                >
                  Login to book
                </Link>
              )}
            </div>
            <div className="mt-4 flex gap-4 sm:hidden lg:items-start lg:gap-8">
              <div className="flex-1 text-left">
                <h2 className="text-xl font-semibold text-primary-text md:text-2xl">
                  {name}
                </h2>
                <p className="text-lg font-medium text-primary-text">
                  {year} years {month} months Experience
                </p>
              </div>
              <div className="flex items-center gap-3 text-xl font-semibold text-primary-text">
                <FaStar size={32} color="#FFD233" />
                <p className="text-3xl">{ratings}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/3">
          <div className="mt-4 hidden flex-col gap-4 sm:flex lg:flex-row lg:items-start lg:gap-8">
            <div className="flex-1 text-left">
              <h2 className="text-xl font-semibold text-primary-text md:text-2xl">
                {name}
              </h2>
              <p className="text-lg font-medium text-primary-text">
                {year} years {month} months Experience
              </p>
            </div>
            <div className="flex items-center gap-3 text-xl font-semibold text-primary-text">
              <FaStar size={32} color="#FFD233" />
              <p className="text-3xl">{ratings}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold text-primary-text md:text-2xl">
              About
            </h2>
            <p className="text-base text-primary-text">{about}</p>
          </div>

          {isCertified && (
            <div className="mt-4">
              <h2 className="mb-2 text-xl font-semibold text-primary-text md:text-2xl">
                Certificate
              </h2>
              <img
                className="h-60 w-full rounded-lg object-cover object-center shadow-md sm:h-full"
                src={certificationURL}
                alt="Certificate"
              />
            </div>
          )}

          <div className="mt-4 flex items-start justify-between flex-col gap-4 sm:hidden">
            <p className="text-xl font-semibold text-primary-text md:text-2xl">
              Fees: {fees == 0 ? "Free" : `₹${fees}`}
            </p>
            {isAuthenticated ? (
              <BookConsultant
                consultantId={consultantId}
                serviceId={serviceId}
              />
            ) : (
              <Link
                className="hover:bg-primary-button-hover rounded-lg bg-primary-button-color px-6 py-3 text-lg font-semibold text-white transition-colors duration-300"
                to="/login"
              >
                Login to book
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultant;
