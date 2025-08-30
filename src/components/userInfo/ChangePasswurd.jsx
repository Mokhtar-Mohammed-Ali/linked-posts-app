
import { useState } from "react";
import { Button, Spinner } from "@heroui/react";
import { changePasswordApi } from "../../services/userServices";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const res = await changePasswordApi(password, newPassword);
    console.log(res);

    if (res?.token) {
 
      setMessage(res.message);
      localStorage.setItem("token", res.token);
      setPassword("");
      setNewPassword("");
    } else {
  
      setError( "invalid password");
    }

    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center bg-transparent py-16 translate-y-[10%]  ">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Change Your Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Current Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Enter your current password"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Create a new password"
              required
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              {loading && (
                <Spinner variant="spinner" color="white" className="mr-2" />
              )}
              Change Password
            </Button>
          </div>
        </form>

        {message && (
          <p className="mt-6 text-green-600 text-center font-medium">
            ✅ {message}
          </p>
        )}
        {error && (
          <p className="mt-6 text-red-600 text-center font-medium">
            ❌ {error}
          </p>
        )}
      </div>
    </div>
  );
}
