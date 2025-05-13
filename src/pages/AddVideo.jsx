import { useState } from "react";
import axios from "axios";

export const AddVideo = () => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !video) {
      setMessage("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("video", video);

    try {
      const response = await axios.post("http://localhost:5000/api/video/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Video uploaded successfully!");
      console.log(response.data);
      setName("");
      setVideo(null);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      setMessage("Error uploading video.");
    }
  };

  return (
    <div>
      <h2>Upload New Video</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Video Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AddVideo;
