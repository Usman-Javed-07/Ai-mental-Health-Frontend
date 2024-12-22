// import { useState } from "react";
// import axios from "axios";
// import { NavLink, useNavigate } from "react-router-dom";
// import "../css/Signup.css"
// export const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         FirstName: "",
//         LastName: "",
//     });
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");

//     const navigate = useNavigate();

//     // Regular expression for basic email validation
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });

//         if (name === "email") {
//             if (!emailRegex.test(value)) {
//                 setEmailError("Invalid email address.");
//             } else {
//                 setEmailError("");
//             }
//         }

//         if (name === "password" || name === "confirmPassword") {
//             setPasswordError("");
//         }
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();

    
//         if (!emailRegex.test(formData.email)) {
//             setEmailError("Please enter a valid email address.");
//             return;
//         }

//         if (formData.password !== formData.confirmPassword) {
//             setPasswordError("Passwords do not match!");
//             return;
//         }

//         try {
          
//             setEmailError("");
//             setPasswordError("");
//             const response = await axios.post("http://localhost:5000/api/users/signup", formData);

//             const { token, message } = response.data;
    
//             // Store the token in localStorage
//             localStorage.setItem("token", token);
    
//             alert(message || "Signup successful!");
        
//             navigate("/");
//         } catch (err) {
//             const errorMessage = err.response?.data?.message || "Error signing up";
//             setPasswordError(errorMessage);
//         }
//     };
//     return (
//         <div className="main-section">
//             <div className="signup-image">
//                      <img src="Logo.png" alt="signup image" />
//             </div>

//             <div className="signup">
//                 <h1>Register</h1>
//                 <form className="form" onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="username"
//                         required
//                         minLength="3"
//                         placeholder="Username"
//                         value={formData.username}
//                         onChange={handleChange}
//                     />
//                        <input
//                         type="text"
//                         name="FirstName"
//                         required
//                         minLength="3"
//                         placeholder="first name"
//                         value={formData.FirstName}
//                         onChange={handleChange}
//                     />
//                        <input
//                         type="text"
//                         name="LastName"
//                         required
//                         minLength="3"
//                         placeholder="last name"
//                         value={formData.LastName}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         required
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     {emailError && <p style={{ color: "red" }}>{emailError}</p>}
//                     <input
//                         type="password"
//                         name="password"
//                         required
//                         minLength="6"
//                         placeholder="New Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         style={{
//                             borderColor: passwordError ? "red" : "",
//                         }}
//                     />
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         required
//                         minLength="6"
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         style={{
//                             borderColor: passwordError ? "red" : "",
//                         }}
//                     />
//                     {passwordError && <p style={{ color: "red", marginTop: "-10px" }}>{passwordError}</p>}
//                     <button type="submit" className="signup-btn">SignUp</button>
//                     <div className="have-an-account">
//                         <p>Already have an account?</p>
//                         <NavLink to="/">Login</NavLink>
//                     </div>
//                 </form>
//                         </div>
//             </div>
//     );
// };

// export default Signup;




import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Signup.css";

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
    const [formError, setFormError] = useState(""); // To handle missing FirstName/LastName errors

    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "email") {
            if (!emailRegex.test(value)) {
                setEmailError("Invalid email address.");
            } else {
                setEmailError("");
            }
        }

        if (name === "password" || name === "confirmPassword") {
            setPasswordError("");
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
            return;
        }

        if (!formData.FirstName || !formData.LastName) {
            setFormError("FirstName and LastName are required!");
            return;
        }

        try {
            setEmailError("");
            setPasswordError("");
            setFormError(""); // Reset form error

            const response = await axios.post("http://localhost:5000/api/users/signup", formData);
            const { token, message } = response.data;

            localStorage.setItem("token", token);
            alert(message || "Signup successful!");

            navigate("/");
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Error signing up";
            setPasswordError(errorMessage);
        }
    };

    return (
        <div className="main-section">
            <div className="signup-image">
                <img src="Logo.png" alt="signup image" />
            </div>

            <div className="signup">
                <h1>Register</h1>
                <form className="form" onSubmit={handleSubmit}>
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
                    <input
                        type="text"
                        name="LastName"
                        required
                        minLength="3"
                        placeholder="Last name"
                        value={formData.LastName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                    <input
                        type="password"
                        name="password"
                        required
                        minLength="6"
                        placeholder="New Password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ borderColor: passwordError ? "red" : "" }}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        minLength="6"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={{ borderColor: passwordError ? "red" : "" }}
                    />
                    {passwordError && <p style={{ color: "red", marginTop: "-10px" }}>{passwordError}</p>}
                    {formError && <p style={{ color: "red", marginTop: "-10px" }}>{formError}</p>}
                    <button type="submit" className="signup-btn">SignUp</button>
                    <div className="have-an-account">
                        <p>Already have an account?</p>
                        <NavLink to="/">Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
