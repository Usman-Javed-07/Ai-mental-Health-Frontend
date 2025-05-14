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
              disabled={loading} 
            />
            <button onClick={sendMessage} className={styles.aiBtn} disabled={loading}>
              {loading ? (
                <FaSpinner className={`${styles.spinner} ${styles.aiSendBtn}`} />
              ) : (
                <LuSendHorizontal className={styles.aiSendBtn} />
              )}
            </button>
          </div>
          <p>{response}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil, excepturi delectus consequatur voluptatem, nobis neque rem cum sint ut modi corporis eveniet, laboriosam accusantium dolorum. Illum nam laudantium iure. Quidem modi dolorem quam saepe quaerat sit quasi aspernatur? Eum corrupti unde tenetur dolores cumque voluptatem dolore laborum! Odio, corporis quidem distinctio fuga earum expedita aut porro sequi? Reprehenderit dolor, cupiditate voluptatum nisi doloremque natus ab vero non repellat similique ipsam soluta vel reiciendis sunt tenetur eum, in, blanditiis voluptatibus? Asperiores, distinctio. Cupiditate accusantium ut perferendis non, eos esse animi similique possimus maiores ex nemo inventore at, recusandae doloribus officiis repellat, consequuntur repellendus incidunt fugiat fuga. Eaque ratione quis sint rem pariatur optio omnis commodi labore libero! Accusantium aut blanditiis inventore consequatur consectetur corrupti! Inventore necessitatibus porro quos eaque ab neque dolor commodi magni unde ipsa libero soluta officiis quae, officia pariatur sequi maiores natus saepe! Nulla inventore doloremque et repellendus, eligendi consectetur, ex facere, alias consequuntur corporis iste. Totam eos dolorum tenetur dignissimos rerum enim optio deserunt. Facere nesciunt reprehenderit cupiditate ullam quos, quidem, repellat illo quia soluta eaque, voluptates nihil. Aut eos id ducimus soluta fugit aperiam nam voluptate. Odit rem, excepturi ut saepe quae molestiae iusto quos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
