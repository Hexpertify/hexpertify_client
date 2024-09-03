import { IoCaretBackOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

function BackButton() {
    return (
        <Link
        to={-1}
        className="font-Akshar mb-4 inline-flex items-center text-2xl font-normal text-primary-text"
      >
        <IoCaretBackOutline className="inline-block" />
        Back
      </Link>
    )
}

export default BackButton
