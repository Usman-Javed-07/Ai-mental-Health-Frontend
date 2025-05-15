import { useState } from "react";
import axios from "axios";
import styles from "../components/css/AddVideo.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddVideo = () => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !video) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("video", video);

    try {
       await axios.post("http://localhost:5000/api/video/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Video uploaded successfully!");
      setName("");
      setVideo(null);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      toast.error("Error uploading video.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload New Video</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Video Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Upload Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn}>Upload</button>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddVideo;
