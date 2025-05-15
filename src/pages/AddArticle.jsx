import { useState } from "react";
import axios from "axios";
import styles from "../components/css/AddArticle.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      setError("Title and content are required.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/articles/add", formData);
      toast.success(" Article added successfully!");
      setError("");
      setFormData({ title: "", content: "", category: "" });
    } catch (err) {
      console.error("Article submission error:", err);
      setError(" Failed to submit article.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <ToastContainer position="top-right" />
      <h2 className={styles.heading}>Add New Mental Health Article</h2>

      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Category (e.g., stress, anxiety, depression):</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={8}
            className={styles.textarea}
          />
        </div>

        <button type="submit" className={styles.button}>
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
