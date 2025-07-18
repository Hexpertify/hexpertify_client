import ServicesContainer from "../../features/services/ServicesContainer";
import { Helmet } from 'react-helmet';


function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
       <Helmet>
            <meta charSet="utf-8" />
            <title>Hexpertify-Services</title>    
            <link rel="canonical" href="https://hexpertify.com/services" />
            <meta name="description" content="Featured services to consult experts from various fields" />
            <meta name="keywords" content="Hexpertify, Consulting, Book appointment, Doctor Consultation , Lawyer , Fitness Coach, Business consultant" />
      </Helmet>
      <h1 className="sr-only">
       Available Services on Hexpertify
      </h1>
      <h2 className="py-4 text-start font-Alata text-2xl font-normal sm:text-center sm:text-5xl">
        Featured Services
      </h2>

      <ServicesContainer />
    </div>
  );
}

export default Services;
