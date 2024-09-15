/* eslint-disable react/prop-types */
import { Button } from "../../components/Button";
import Modal from "../../components/Modal";
import useBookConsultant from "./hooks/useBookConsultant";

function BookConsultant({ consultantId, serviceId }) {
  const { bookConsultantAction, isloading } = useBookConsultant();
  const handleBooking = async (consultantId, serviceId, onCloseModal) => {
    try {
      const payload = { consultantId, serviceId };
      await bookConsultantAction(payload);
    } catch (error) {
      console.log(error);
    } finally {
      onCloseModal();
    }
  };
  return (
    <Modal>
      <Modal.Open opens="bookConsultant">
        <Modal.Button
          title="Book Appointment"
          className="sm:w-fit w-full !rounded-full"
        />
      </Modal.Open>
      <Modal.Window name="bookConsultant">
        {({ onCloseModal }) => (
          <div className="mx-auto max-w-sm rounded-lg p-2">
            <h1 className="text-2xl font-semibold text-primary-text">
              Book Consultant
            </h1>
            <p className="text-primary-text">
              Are you sure you want to Book the consultant?
            </p>
            <div className="mt-2 flex gap-3">
              <Button
                title={isloading ? "Booking..." : "Yes, Book"}
                handleClick={() =>
                  handleBooking(consultantId, serviceId, onCloseModal)
                }
                disabled={isloading}
              />
              <Modal.Close>
                <Modal.Button variant="cancel" title="No, Close" />
              </Modal.Close>
            </div>
          </div>
        )}
      </Modal.Window>
    </Modal>
  );
}

export default BookConsultant;
