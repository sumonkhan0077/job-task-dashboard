import { useState } from "react";


import { useNavigate } from "react-router";
import axiosSecure from "../API/axiosSecure";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosSecure.post("/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");

    } catch (error) {
      alert("Login failed");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-emerald-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;