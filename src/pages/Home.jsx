import { useState } from "react";
import axios from "axios";
import { LuSendHorizontal } from "react-icons/lu";
import styles from "../components/css/Home.module.css";

export const Home = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message,
      });
      setResponse(res.data.reply);
    } catch (error) {
      console.error("Axios Error:", error);
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
          />
          <button onClick={sendMessage} className={styles.aiBtn}>
            <LuSendHorizontal className={styles.aiSendBtn} />
          </button>
            </div>
          <p>Response: {response}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
