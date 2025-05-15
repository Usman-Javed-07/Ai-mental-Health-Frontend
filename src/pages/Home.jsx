import { useState } from "react";
import axios from "axios";
import { LuSendHorizontal } from "react-icons/lu";
import { FaSpinner } from "react-icons/fa";
import styles from "../components/css/Home.module.css";

export const Home = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message,
      });
      setResponse(res.data.reply);
    } catch (error) {
      console.error("Axios Error:", error);
      setResponse("Something went wrong.");
    } finally {
      setLoading(false);
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
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className={styles.aiBtn}
              disabled={loading}
            >
              {loading ? (
                <FaSpinner
                  className={`${styles.spinner} ${styles.aiSendBtn}`}
                />
              ) : (
                <LuSendHorizontal className={styles.aiSendBtn} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.aiResponse}>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Home;
