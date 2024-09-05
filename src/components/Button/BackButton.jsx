import { IoCaretBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      to={-1}
      className="inline-flex items-center rounded-xl bg-white p-2 font-Akshar text-2xl font-normal text-primary-text shadow-lg"
    >
      <IoCaretBackOutline className="inline-block" />
    </Link>
  );
}

export default BackButton;
