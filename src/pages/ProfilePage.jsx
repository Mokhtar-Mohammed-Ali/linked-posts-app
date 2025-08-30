

import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import UploadProfilePhoto from "../components/userInfo/UploadProfilePhoto";
import UserPosts from "../components/Posts/UserPosts";
import ChangePassword from "../components/userInfo/ChangePasswurd";
import { AuthContext } from "../components/context/AuthContext";

export default function ProfilePage() {
  const { userData } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "posts";

  function handleTabChange(tab) {
    setSearchParams({ tab });
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div
        className="
          w-full bg-gray-700 p-4 flex flex-row flex-wrap gap-3 
          md:fixed md:top-1/2 md:left-0 md:-translate-y-1/2 md:w-64 md:h-1/2 md:flex-col md:gap-4 md:rounded-r-xl md:shadow-lg
        "
      >
        <span className="text-blue-300 font-semibold text-center w-full">
          Hello, <span className="text-green-300">{userData?.name}</span>
        </span>

        <button
          onClick={() => handleTabChange("posts")}
          className={`p-2 rounded w-full ${activeTab === "posts"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          My Posts
        </button>

        <button
          onClick={() => handleTabChange("photo")}
          className={`p-2 rounded w-full ${activeTab === "photo"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Upload Photo
        </button>

        <button
          onClick={() => handleTabChange("password")}
          className={`p-2 rounded w-full ${activeTab === "password"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Change Password
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="p-2 rounded w-full text-red-600 bg-white hover:bg-red-50"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:ml-64">
        {activeTab === "posts" && <UserPosts />}
        {activeTab === "photo" && <UploadProfilePhoto />}
        {activeTab === "password" && <ChangePassword />}
      </div>
    </div>
  );
}
