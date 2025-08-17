'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-6 text-gray-800"
        >
          Login
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative"
          >
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg transition-all"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-gray-500 mt-4">
         Login To recieve our Newletters
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
