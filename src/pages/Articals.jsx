import { useEffect, useState } from "react";
import axios from "axios";

export const Articals = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Articles</h1>
      {error && <p>{error}</p>}
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        articles.map((article) => (
          <div key={article._id} style={{ marginBottom: "30px" }}>
            <h2>{article.title}</h2>
            <p style={{ fontStyle: "italic", color: "gray" }}>{article.category}</p>
            <p>{article.content}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Articals;
