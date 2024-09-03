import ServicesContainer from "../../features/services/ServicesContainer";

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="py-4 text-start font-Alata text-3xl font-normal md:text-5xl">
        Featured Services
      </h1>

      <ServicesContainer />
    </div>
  );
}

export default Services;
