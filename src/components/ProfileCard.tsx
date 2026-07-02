import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelectedProfilesStore } from "@/store/selectedProfilesStore";
import type { Platform, UserProfileSummary } from "@/types";
import { VerifiedBadge } from "./VerifiedBadge";

interface ProfileCardProps {
  profile: UserProfileSummary;
  platform: Platform;
  searchQuery: string;
  onProfileClick?: (username: string) => void;
}

function formatFollowersLocal(count: number) {
  if (count >= 1000000) return (count / 1000000).toFixed(1) + "M followers";
  if (count >= 1000) return (count / 1000).toFixed(0) + "K followers";
  return count + " followers";
}

export function ProfileCard({
  profile,
  platform,
  searchQuery,
  onProfileClick,
}: ProfileCardProps) {
  const navigate = useNavigate();

  const { addProfile, selectedProfiles } = useSelectedProfilesStore();

  const isAdded = selectedProfiles.some(
    (p) => p.username === profile.username
  );

  const handleClick = () => {
    if (onProfileClick) onProfileClick(profile.username);
    navigate(`/profile/${profile.username}?platform=${platform}`);
  };

  const handleAddToList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addProfile(profile);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="mb-4 flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
      data-search={searchQuery}
    >
      <img
        src={profile.picture}
        alt={profile.username}
        className="h-16 w-16 rounded-full border-2 border-gray-200 object-cover"
      />

      <div className="flex-1 text-left">
        <div className="flex items-center gap-1 text-lg font-bold text-gray-900">
          @{profile.username}
          <VerifiedBadge verified={profile.is_verified} />
        </div>

        <p className="text-gray-600">{profile.fullname}</p>

        <p className="mt-2 text-sm font-medium text-gray-500">
          👥 {formatFollowersLocal(profile.followers)}
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToList}
        disabled={isAdded}
        className={`rounded-xl px-5 py-2 font-semibold transition-all ${isAdded
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
      >
        {isAdded ? "✓ Added" : "+ Add"}
      </motion.button>
    </motion.div>
  );
}