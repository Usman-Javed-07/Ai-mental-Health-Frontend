import { useState } from "react";
import axios from "axios";



export const AddMusic = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image || !audio) {
      setMessage("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("audio", audio);

    try {
      const response = await axios.post("http://localhost:5000/api/music/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Music uploaded successfully!");
      console.log(response.data);
      setName("");
      setImage(null);
      setAudio(null);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      setMessage("Error uploading music.");
    }
  };

  return (
    <div>
      <h2>Upload New Music</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Music Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div>
          <label>Upload Audio:</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudio(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AddMusic;
