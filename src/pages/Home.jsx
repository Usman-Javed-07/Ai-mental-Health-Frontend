import { useState } from "react";
import axios from "axios";
import { LuSendHorizontal } from "react-icons/lu";
import { FaSpinner } from "react-icons/fa"; // Spinner icon
import styles from "../components/css/Home.module.css";

export const Home = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // <-- New loading state

  const sendMessage = async () => {
    setLoading(true); // start loading
    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message,
      });
      setResponse(res.data.reply);
    } catch (error) {
      console.error("Axios Error:", error);
      setResponse("Something went wrong.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <div className={styles.homeImage}>
          <img src="mainLogo.png" alt="home image" />
        </div>
        <div className={styles.homeSearch}>
          <div className={styles.homeInput}>
            <input
              className={styles.aiInput}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              disabled={loading} // optional: disable input during loading
            />
            <button onClick={sendMessage} className={styles.aiBtn} disabled={loading}>
              {loading ? (
                <FaSpinner className={`${styles.spinner} ${styles.aiSendBtn}`} />
              ) : (
                <LuSendHorizontal className={styles.aiSendBtn} />
              )}
            </button>
          </div>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
