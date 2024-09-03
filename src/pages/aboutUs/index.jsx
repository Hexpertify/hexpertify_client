function AboutUs() {
  return (
    <div className="container mx-auto mb-4 min-h-[calc(100vh-15rem)] px-4 py-8 text-primary-text">
      <h1 className="text-primary border-primary mb-4 border-b-2 pb-2 text-3xl font-extrabold">
        About Us
      </h1>
      <h2 className="mb-4 text-2xl font-semibold text-primary-text lg:text-3xl">
        Welcome to HEXPERTIFY, your trusted partner in consultancy services.
      </h2>
      <p className="mb-4 text-base leading-relaxed lg:text-lg">
        At HEXPERTIFY, we are committed to delivering exceptional consulting
        services tailored to meet the unique needs of our clients. With a team
        of experienced professionals and subject matter experts, we strive to
        provide innovative solutions that drive growth and success for
        businesses across various industries.
      </p>

      <div className="mb-6 text-primary-text">
        <h3 className="mb-2 text-xl font-semibold text-primary-text">
          OUR MISSION
        </h3>
        <p className="text-base leading-relaxed lg:text-lg">
          Our mission at HEXPERTIFY is to empower individuals and businesses
          with strategic insights and expert guidance to navigate challenges,
          seize opportunities, and achieve their goals. We are dedicated to
          building long-lasting relationships with our clients based on trust,
          integrity, and mutual success.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
