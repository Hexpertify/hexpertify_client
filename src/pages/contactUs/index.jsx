function ContactUs() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center px-4 py-8 text-primary-text">
      <h1 className="mb-8 text-center text-3xl font-extrabold">Contact Us</h1>
      <p className="mb-6 text-center text-lg">
        We would love to hear from you! You can reach us through any of the
        following methods:
      </p>

      <div className="flex flex-col items-center space-y-4">
        <a
          className="transform rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition-transform hover:scale-105"
          href="mailto:hexpertifyapp@gmail.com?subject=Inquiry&body=Hi%20there!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Us
        </a>
        <p className="text-lg">
          Phone:{" "}
          <a href="tel:+918940506900" className="text-blue-600 underline">
            +91 89405 06900
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
