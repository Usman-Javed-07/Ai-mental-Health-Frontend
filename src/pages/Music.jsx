import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../components/css/Music.module.css";

export const Music = () => {
  const [musicList, setMusicList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMusic, setCurrentMusic] = useState(null);
  const [, setIsPlaying] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/music/list")
      .then((response) => {
        setMusicList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching music list:", error);
      });
  }, []);

  const filteredMusic = musicList.filter((music) =>
    music.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMusicClick = (music) => {
    setCurrentMusic(music);
    setIsPlaying(true);
  };

  const handleClosePlayer = () => {
    setCurrentMusic(null);
    setIsPlaying(false);
  };

  return (
    <div className={styles.musicContainer}>
      <input
        type="text"
        placeholder="Search music..."
        className={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.musicGrid}>
        {filteredMusic.map((music) => (
          <div
            key={music._id}
            className={styles.musicCard}
            onClick={() => handleMusicClick(music)}
          >
            <img
              src={`http://localhost:5000${music.imageUrl}`}
              alt={music.name}
              className={styles.musicImage}
            />
            <h3 className={styles.musicTitle}>{music.name}</h3>
          </div>
        ))}
      </div>

      {currentMusic && (
        <div className={styles.fullScreenPlayer}>
          <button className={styles.closeButton} onClick={handleClosePlayer}>
            ✖
          </button>
          <img
            src={`http://localhost:5000${currentMusic.imageUrl}`}
            alt={currentMusic.name}
            className={styles.playerImage}
          />
          <h2 className={styles.playerTitle}>{currentMusic.name}</h2>
          <audio controls autoPlay className={styles.audioPlayer}>
            <source
              src={`http://localhost:5000${currentMusic.audioUrl}`}
              type="audio/mp3"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Music;
