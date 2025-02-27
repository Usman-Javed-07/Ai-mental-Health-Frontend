import { useState } from "react";
import axios from "axios";

export const Home = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const sendMessage = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/chat", { message });
            setResponse(res.data.reply);
        } catch (error) {
            console.error("Axios Error:", error);
        }
    };

    return (
        <div>
            <h1>ChatGPT Chatbot</h1>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Ask something..."
            />
            <button onClick={sendMessage}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
};

export default Home;
