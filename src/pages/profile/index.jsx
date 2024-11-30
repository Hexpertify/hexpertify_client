import { useAuthContext } from "../../contexts/AuthContext ";
import UserBookingList from "../../features/booking/UserBookingList ";
import ProfileCard from "../../features/profile/ProfileCard";
import AdminAccess from "./AdminAccess";

function Profile() {
  const { isAdmin } = useAuthContext();

  return (
    <div className="min-h-screen p-6">
      <ProfileCard />
      {!isAdmin ? <UserBookingList /> : <AdminAccess />}
    </div>
  );
}

export default Profile;
