import { useState } from "react";

import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <form onSubmit={submitHandler} className="auth-form">
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          minLength={4}
          maxLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input type="file" />
      </label>
      <button type="submit" className="btn">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
