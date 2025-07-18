import { Helmet } from 'react-helmet';
function AboutUs() {
  return (
    <div className="container mx-auto mb-4 min-h-[calc(100vh-15rem)] px-4 py-8 text-primary-text">
      <Helmet>
            <meta charSet="utf-8" />
            <title>About Hexpertify</title>    
            <meta name="description" content=" Hexpertify is an online Consulting platform where people can Consult
        with CERTIFIED Consultants across a wide range of
        fields ranging from Healthcare to Fashion. In the world full of
        misinformation Hexpertify serves people by making the process of finding
        a Verified and Certified Expert online." />
        <meta name="keywords" content="Online Consulting, Hexpertify, Consulting, About Hexpertify" />
        <link rel="canonical" href="https://hexpertify.com/about-us" />
      </Helmet>
      <h1 className="text-primary border-primary !mt-4 mb-4 border-b-2 pb-2 text-3xl font-extrabold">
        About Us
      </h1>
      <h2 className="mb-4 text-2xl font-semibold text-primary-text lg:text-3xl">
        Welcome to HEXPERTIFY, your trusted Online consulting Partner.
      </h2>
      <p className="mb-4 text-base leading-relaxed lg:text-lg">
        Hexpertify is an online Consulting platform where people can Consult
        with CERTIFIED Consultants across a wide range of
        fields ranging from Healthcare to Fashion. 
        In the world full of misinformation Hexpertify serves people by making the process of finding
        a Verified and Certified Expert online.
      </p>

      <div className="mb-6 text-primary-text">
        <h3 className="mb-2 text-xl font-semibold text-primary-text">
          OUR MISSION
        </h3>
        <p className="text-base leading-relaxed lg:text-lg">
          Hexpertify is on a Mission to destroy Misinformation , ensuring the
          world never struggles to find certified Professionals across any
          Sector.Also Hexpertify wages War against the deception of Astrology, ensuring
          that knowledge, not luck, shapes your future.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
