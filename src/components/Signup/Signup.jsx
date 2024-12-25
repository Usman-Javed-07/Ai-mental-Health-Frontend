import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../css/Signup.module.css";
import { toast } from 'react-toastify';

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        FirstName: "",
        LastName: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [formError, setFormError] = useState("");
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-Za-z]+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "email" && !emailRegex.test(value)) {
            setEmailError("Invalid email address.");
        } else {
            setEmailError("");
        }

        if (name === "FirstName" || name === "LastName") {
            if (!nameRegex.test(value)) {
                setNameError("Name should only contain letters.");
            } else {
                setNameError("");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailRegex.test(formData.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match!");
            toast.error("Passwords do not match!")
            return;
        }

        if (!formData.FirstName || !formData.LastName) {
            setFormError("FirstName and LastName are required!");
            toast.info("FirstName and LastName are required!")
            return;
        }

        if (nameError) {
            setFormError("Please correct the name fields.");
            toast.info("Please correct the name fields.")
            return;
        }

        try {
            setEmailError("");
            setPasswordError("");
            setFormError("");
            setNameError("");

            const response = await axios.post("http://localhost:5000/api/users/signup", formData);
            const { token, message } = response.data;

            localStorage.setItem("token", token);
            toast.success(message || "Signup successful!");

            navigate("/");
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Error signing up";
            toast.error("Error signing up")
            setPasswordError(errorMessage);
        }
    };

    return (
        <div className={styles.mainSection}>
            <div className={styles.signupFormData}>
                <div className={styles.signupImage}>
                    <img src="mainLogo.png" alt="signup" />
                </div>
                <div className={styles.signup}>
                    <h1>Register</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            required
                            minLength="3"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="FirstName"
                            required
                            minLength="3"
                            placeholder="First name"
                            value={formData.FirstName}
                            onChange={handleChange}
                        />
                        {nameError && <p className={styles.errorText}>{nameError}</p>}
                        <input
                            type="text"
                            name="LastName"
                            required
                            minLength="3"
                            placeholder="Last name"
                            value={formData.LastName}
                            onChange={handleChange}
                        />
                        {nameError && <p className={styles.errorText}>{nameError}</p>}
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {emailError && <p className={styles.errorText}>{emailError}</p>}
                        <input
                            type="password"
                            name="password"
                            required
                            minLength="6"
                            placeholder="New Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            minLength="6"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {passwordError && <p className={styles.errorText}>{passwordError}</p>}
                        {formError && <p className={styles.errorText}>{formError}</p>}
                        <button type="submit" className={styles.signupBtn}>
                            Sign Up
                        </button>
                        <div className={styles.haveAnAccount}>
                            <p>Already have an account?</p>
                            <NavLink to="/" className={styles.loginLink}>
                                Login
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
