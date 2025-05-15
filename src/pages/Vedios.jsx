import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../components/css/video.module.css";

export const Vedios = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentVideo, setCurrentVideo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/video/list"
        );
        setVideos(response.data);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos.");
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const handleClosePlayer = () => {
    setCurrentVideo(null);
  };

  return (
    <div className={styles.videoContainer}>
      <input
        type="text"
        placeholder="Search videos..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {error && <p>{error}</p>}
      {filteredVideos.length === 0 ? (
        <p className={styles.noVideos}>No videos found.</p>
      ) : (
        <div className={styles.videoGrid}>
          {filteredVideos.map((video) => (
            <div
              key={video._id}
              className={styles.videoCard}
              onClick={() => handleVideoClick(video)}
            >
              <video className={styles.videoPreview}>
                <source
                  src={`http://localhost:5000${video.videoUrl}`}
                  type="video/mp4"
                />
              </video>
              <h3 className={styles.videoTitle}>{video.name}</h3>
            </div>
          ))}
        </div>
      )}

      {currentVideo && (
        <div className={styles.fullScreenPlayer}>
          <button className={styles.closeButton} onClick={handleClosePlayer}>
            ✖
          </button>
          <h2 className={styles.playerTitle}>{currentVideo.name}</h2>
          <video className={styles.fullVideoPlayer} controls autoPlay>
            <source
              src={`http://localhost:5000${currentVideo.videoUrl}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Vedios;
