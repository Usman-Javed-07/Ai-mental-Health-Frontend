import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../components/css/Article.module.css";

export const Articals = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/articles/list");
        setArticles(res.data);
      } catch (err) {
        console.error("Fetch Articles Error:", err);
        setError("Failed to load articles.");
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.articleContainer}>
      <input
        type="text"
        placeholder="Search by title or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />

      {error && <p className={styles.error}>{error}</p>}

      {filteredArticles.length === 0 ? (
        <p className={styles.noArticles}>No articles found.</p>
      ) : (
        filteredArticles.map((article) => (
          <div key={article._id} className={styles.articleCard}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.category}>{article.category}</p>
            <p className={styles.content}>{article.content}</p>
            <hr className={styles.divider} />
          </div>
        ))
      )}
    </div>
  );
};

export default Articals;
