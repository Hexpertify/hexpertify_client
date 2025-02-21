
const TermsAndCondition = () => {
  return (
    <div className="container mx-auto mb-4 min-h-[calc(100vh-15rem)] px-4 py-8 text-primary-text">
      <h1 className="text-primary border-primary !mt-4 mb-4 border-b-2 pb-2 text-3xl font-extrabold">
        Terms and Conditions
      </h1>
      <p className="mb-4 text-base leading-relaxed lg:text-lg">
        By using Hexpertify's services, you agree to these terms and conditions.
      </p>
      <div className="mb-6 text-primary-text">
        <h2 className="mb-2 text-xl font-semibold text-primary-text">
          Eligibility:
        </h2>
        <p className="text-base leading-relaxed lg:text-lg">
          You must be 13 years or older to use our services. By agreeing, you confirm that all information provided is accurate and truthful.
        </p>
      </div>
      <div className="mb-6 text-primary-text">
        <h2 className="mb-2 text-xl font-semibold text-primary-text">
          Prohibited Use:
        </h2>
        <p className="text-base leading-relaxed lg:text-lg">
          Users must not misuse our platform, including but not limited to fraud, spamming, or infringing on others' rights. Any violation may result in account suspension or termination.
        </p>
      </div>
      <div className="mb-6 text-primary-text">
        <h2 className="mb-2 text-xl font-semibold text-primary-text">
          Changes to Terms:
        </h2>
        <p className="text-base leading-relaxed lg:text-lg">
          We reserve the right to update these terms at any time. We will notify users of significant changes via email.
        </p>
      </div>
      <div className="mb-6 text-primary-text">
        <h2 className="mb-2 text-xl font-semibold text-primary-text">
          Termination:
        </h2>
        <p className="text-base leading-relaxed lg:text-lg">
          We reserve the right to terminate accounts that violate these terms without prior notice.
        </p>
      </div>
      <div className="mt-6">
        <p className="text-base leading-relaxed lg:text-lg">
          For more information, contact: <a href="mailto:hexpertifyapp@gmail.com" className="text-primary">hexpertifyapp@gmail.com</a> or call 8940506900.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
