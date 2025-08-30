import { useContext, useState } from "react";
import { Button, Spinner } from "@heroui/react";
import { uploadProfilePhotoApi } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function UploadProfilePhoto({ callback }) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const { GetUserData } = useContext(AuthContext);

  const navigate = useNavigate()
  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setError("❌ Maximum file size is 4MB");
        return;
      }
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
      setError(null);

    }
    e.target.value = "";
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!image) {
      setError("Please select an image first");
      return;
    }
    setLoading(true);
    setMessage(null);
    setError(null);

    const formData = new FormData();
    formData.append("photo", image);

    const res = await uploadProfilePhotoApi(formData);
    console.log(res)

    if (res?.message) {
      setMessage("✅ Profile photo updated successfully!");
      setImage(null);
      setImageUrl("");
      await GetUserData()



      if (callback) {
        callback();
        navigate("/profile")
      }
    } else {
      setError(res?.error || "❌ Failed to upload image");
    }

    setLoading(false);
  }


  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 translate-y-[40%]">
      <h2 className="text-xl font-bold text-center mb-4 text-gray-700">
        Upload Profile Photo
      </h2>

      <form onSubmit={handleUpload} className="space-y-4">
        {imageUrl && (
          <div className="relaive">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
            <button
              type="button"
              onClick={() => {
                setImage(null);
                setImageUrl("");
              }}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        )}

        <label className="flex items-center justify-center w-full px-4 py-2 bg-gray-100 border rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-gray-600">Choose Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />
        </label>

        <Button
          type="submit"
          disabled={loading || !image}
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          {loading ? <Spinner color="white" size="sm" /> : "Upload"}
        </Button>
      </form>

      {message && (
        <p className="mt-4 text-green-600 text-center font-medium">{message}</p>
      )}
      {error && (
        <p className="mt-4 text-red-600 text-center font-medium">{error}</p>
      )}

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/25 rounded-2xl">
          <Spinner variant="simple" size="lg" color="white" />
        </div>
      )}
    </div>
  );
}

