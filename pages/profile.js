import UnderConstruction from "@/components/UnderConstruction";
import { signOut, useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      <UnderConstruction>
        {session && (
          <button
            className=" text-xl px-4 py-2 bg-gray-800 text-gray-200 rounded-full"
            onClick={signOut}
          >
            Sign Out
          </button>
        )}
      </UnderConstruction>
    </div>
  );
}

export default Profile;
