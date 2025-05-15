import { useState } from "react";
import axios from "axios";
import styles from "../components/css/AddMusic.module.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AddMusic = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image || !audio) {
      toast.error("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("audio", audio);

    try {
       await axios.post("http://localhost:5000/api/music/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Music uploaded successfully!");
      setName("");
      setImage(null);
      setAudio(null);
    } catch (error) {
      console.error("Upload error:", error.response?.data || error.message);
      toast.error("Error uploading music.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload New Music</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Music Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Upload Audio:</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudio(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn}>Upload</button>
      </form>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AddMusic;
