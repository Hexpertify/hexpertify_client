import Spinner from "../../components/Spinner";
import useGetMe from "./hooks/useGetMe";

function ProfileCard() {
  const { data, isPending } = useGetMe();
  const {
    name,
    email: userEmail,
    phoneNumber: phoneNumber,
    username: userName,
  } = data || {};

  if (isPending) {
    return (
      <div className="flex min-h-24 items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-theme">
      <div className="p-6">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">{name}</h1>
        <p className="mb-2 text-sm text-gray-700">
          Email: <span className="font-medium">{userEmail}</span>
        </p>
        <p className="mb-2 text-sm text-gray-700">
          Phone: <span className="font-medium">{phoneNumber}</span>
        </p>
        {userName ? (
          <p className="text-sm text-gray-700">
            Username: <span className="font-medium">{userName}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ProfileCard;
