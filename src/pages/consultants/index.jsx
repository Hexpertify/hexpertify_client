import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import BackButton from "../../components/Button/BackButton";
import useServiceDetails from "./hooks/useConsultantDetails";
import CertificatePopup from "../../features/consultants/CertificatePopup";
import Modal from "../../components/Modal";
import BookConsultant from "../../features/consultants/BookConsultant";

function Consultant() {
  const { id: serviceId, consultantId } = useParams();
  const { data } = useServiceDetails({ id: consultantId });

  const {
    name = "Consultant",
    ratings = 0,
    about = "About Consultant",
    imageURL = "https://via.placeholder.com/150",
    languages = "English",
    isCertified = false,
    fees = 0,
    certificationURL = "https://via.placeholder.com/150",
    experience: { year = 0, month = 0 } = {},
  } = data || {};

  return (
    <div className="px-4 py-6 md:px-8 lg:px-16 xl:px-32">
      <div className="mb-8 flex items-center justify-between">
        <BackButton />
        <h1 className="font-Akshar text-4xl font-semibold text-primary-text lg:text-5xl">
          Book Appointment
        </h1>
        <div />
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-1 flex-col items-center">
          <div className="relative w-full">
            {isCertified && (
              <div className="absolute right-2 top-2 rounded-lg bg-primary-button-color px-2 py-1 text-sm font-medium text-white shadow-lg">
                Certified
              </div>
            )}
            <img
              className="h-72 w-full rounded-lg object-cover object-center shadow-lg"
              src={imageURL}
              alt={`Profile picture of ${name}`}
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="mb-2 text-2xl font-semibold text-primary-text">
                Fees: ₹ {fees}
              </p>
              <BookConsultant
                consultantId={consultantId}
                serviceId={serviceId}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-primary-background p-4 shadow-theme md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary-text">{name}</h2>
            <div className="flex items-center gap-2 text-xl font-semibold text-primary-text">
              <FaStar size={20} color="#FFD233" />
              <p>{ratings}</p>
            </div>
          </div>

          <p className="mb-2 text-lg font-medium text-primary-text">
            {year} years {month} months Experience
          </p>
          <label className="mb-1 block text-lg font-semibold text-primary-text">
            About
          </label>
          <p className="mb-4 text-base text-primary-text">{about}</p>

          <label className="mb-1 block text-lg font-semibold text-primary-text">
            Languages
          </label>
          <p className="mb-4 text-base text-primary-text">{languages}</p>

          <Modal>
            {isCertified && (
              <>
                <Modal.Open opens="certificate">
                  <p className="mb-1 cursor-pointer text-lg font-semibold text-primary-text">
                    View the consultant&apos;s certification
                  </p>
                </Modal.Open>
                <Modal.Window name="certificate">
                  {({ onCloseModal }) => (
                    <CertificatePopup
                      imageURL={certificationURL}
                      onCloseModal={onCloseModal}
                    />
                  )}
                </Modal.Window>
              </>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Consultant;
