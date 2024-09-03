/* eslint-disable react/prop-types */
import { Button } from "../../components/Button";
import Modal from "../../components/Modal";
import useCancleOrder from "./hooks/useCancleBooking";

function CancelBooking({ orderId }) {
  const { cancelBookingAction, isloading } = useCancleOrder();
  const handleCancel = async (orderId, onCloseModal) => {
    try {
      await cancelBookingAction(orderId);
    } catch (error) {
      console.log(error);
    } finally {
      onCloseModal();
    }
  };
  return (
    <Modal>
      <Modal.Open opens="cancelBooking">
        <Modal.Button variant="cancel" title="Cancel" className="w-fit" />
      </Modal.Open>
      <Modal.Window name="cancelBooking">
        {({ onCloseModal }) => (
          <div className="mx-auto max-w-sm rounded-lg p-2">
            <h1 className="text-2xl font-semibold text-primary-text">
              Cancel Booking
            </h1>
            <p className="text-primary-text">
              Are you sure you want to cancel the booking?
            </p>
            <div className="flex gap-3">
              <Button
                title={isloading ? "Cancelling..." : "Yes, Cancel"}
                variant="cancel"
                handleClick={() => handleCancel(orderId, onCloseModal)}
                disabled={isloading}
              />
              <Modal.Close>
                <Modal.Button title="No, Close" />
              </Modal.Close>
            </div>
          </div>
        )}
      </Modal.Window>
    </Modal>
  );
}

export default CancelBooking;
