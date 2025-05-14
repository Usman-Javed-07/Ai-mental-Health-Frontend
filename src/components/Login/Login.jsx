import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "../css/Login.module.css";
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/users/login", formData);

        // Destructure the response to get the user object and token
        const { user, token } = response.data;

        // Combine the token and user data
        const userData = {
            ...user,
            token,
        };

        // Save full user data in localStorage
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("Logged in user:", userData);  // Check the full user object

        toast.success(response.data.message || "Login successful!");

        // Navigate to the Home page after login
        navigate("/Home");
    } catch (err) {
        // Handle any errors during login
        setError(err.response?.data?.message || "An error occurred during login");
        toast.error("An error occurred during login");
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
                        <div className={styles.passwordContainer}>
                            <input
                                className={styles.Input}
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                required
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span
                                className={styles.eyeIcon}
                                onClick={() => setShowPassword(!showPassword)} 
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />} 
                            </span>
                        </div>
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
