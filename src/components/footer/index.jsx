import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const services = ["1:1 Online Consulting", "Hire a Mentor", "Campus & Corporate Webinars"];
  const links=["services","coming-soon","services/campus-&-corporate-webinars/67a0dc9f133acb3735f0deff"]

  return (
    <footer className="text-white shadow-lg rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Left Side - Company Name and Logo */}
          <div className="flex flex-col gap-4" >

          <div className="flex items-center space-x-3 mb-6 sm:mb-0">
            <img src="/hexpertify.PNG" className="h-8 rounded-full shadow-md" alt="Hexpertify" />
            <span className="text-2xl font-semibold text-primary dark:text-primary-light">Hexpertify</span>
          </div>
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="https://www.instagram.com/hexpertify?igsh=MmowZ3VxdDkxdDkz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://x.com/hexpertifyapp?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/hexpertify/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
              </div>

          {/* Right Side - Services */}
          <div className="flex flex-col mb-6 sm:mb-0">
            <h6 className="font-semibold text-lg mb-3 text-primary dark:text-primary-light">Services</h6>
            {services.map((service, index) => (
              <Link to={links[index]} key={index} className="text-sm mb-2">{service}</Link>
            ))}
          </div>
        </div>

        {/* Separator */}
        <hr className="my-6 border-t-2 border-primary dark:border-primary-light" />

        {/* Footer Bottom - Social Icons & Copyright */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
          <div>
            <Link to={"contact-us"}                   className="block text-primary dark:text-primary-light hover:underline transition duration-300"
            >
            Join as Consultant
            </Link>
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="hover:underline">Hexpertify</span>. All Rights Reserved.
          </span>
        </div>

        {/* Footer Links moved to the bottom */}
        <div className="mt-6 flex flex-col items-center">
          <ul className="flex flex-col items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:flex-row sm:gap-6">
            {footerLinks.map((link) => (
              <li key={link.route}>
                <Link
                  to={`/${link.route}`}
                  className="block text-primary dark:text-primary-light hover:underline transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

export const footerLinks = [
  {
    route: "terms-and-condition",
    label: "Terms And Condition"
  },
  {
    route: "privacy-and-refund-policy",
    label: "Privacy And Refund Policy"
  },
  {
    route:"contact-us",
    label:"Contact Us"
  },
];
