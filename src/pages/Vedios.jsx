import { useEffect, useState } from "react";
import axios from "axios";

export const Vedios = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/video/list");
        setVideos(response.data);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos.");
      }
    };

    fetchVideos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Videos</h1>
      {error && <p>{error}</p>}
      {videos.length === 0 ? (
        <p>No videos uploaded yet.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {videos.map((video) => (
            <div key={video._id}>
              <h3>{video.name}</h3>
              <video width="100%" controls>
                <source src={`http://localhost:5000${video.videoUrl}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vedios;
