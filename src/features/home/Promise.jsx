/* eslint-disable no-unused-vars */
import Modal from "../../components/Modal";

function Promise() {
  return (
    <Modal>
      <Modal.Window name="promise">
        {({ onCloseModal }) => (
          <div className="mx-auto max-w-lg rounded-lg bg-primary-background p-4 text-primary-text shadow-lg sm:max-w-md sm:p-6">
            <h2 className="mb-4 text-xl font-semibold sm:text-xl">
              Hexpertify Promise
            </h2>
            <p className="mb-4">
              We are excited to introduce you to the MVP (Minimum Viable
              Product) version of Hexpertify. The MVP website includes only
              limited features as we explore the market & gather feedback from
              early users like you to understand your needs.
            </p>
            <p className="mb-6">
              We promise that once our platform is fully ready we will provide
              quick consultations at an affordable price.
            </p>
            <p className="mb-4">Thanks for Understanding!</p>
          </div>
        )}
      </Modal.Window>
    </Modal>
  );
}

export default Promise;
