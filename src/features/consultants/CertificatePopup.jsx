/* eslint-disable react/prop-types */
function CertificatePopup({ imageURL }) {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-primary-background p-4 sm:max-w-md sm:p-6">
      <img
        className="h-72 w-full rounded-lg object-cover object-center"
        src={imageURL}
        alt="Certificate"
      />
    </div>
  );
}

export default CertificatePopup;
