
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "../css/Login.module.css";

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/users/login", formData);

            // Store the token in localStorage for future API calls
            localStorage.setItem("token", response.data.token);
            console.log(response.data.token);
            alert(response.data.message || "Login successful!");

            // Navigate to the desired page
            navigate("/UserData");
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred during login");
        }
    };

    return (
        <div className={styles.MainSectionLogin}>
            <div className={styles.LoginFormData}>
                <div className={styles.LoginImage}>
                    <img src="mainLogo.png" alt="login image" />
                </div>
                <div className={styles.Login}>
                    <h1>Login</h1>
                    <form className={styles.Form} onSubmit={handleSubmit}>
                        <input
                            className={styles.Input}
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className={styles.Input}
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button className={styles.loginBtn} type="submit">Login</button>
                        {error && <p className={styles.noAccount}>{error}</p>}
                        <div className={styles.newUser}>
                        <p>Don&apos;t have an account?</p>
                        <a className={styles.goToSignUp} href="/SignUp">
                            Signup
                        </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
