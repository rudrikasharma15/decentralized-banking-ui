import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loginIllustration from "../assets/undraw_access-account_aydp.svg";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    pan: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.email.includes("@") ||
      form.password.length < 8 ||
      form.password !== form.confirmPassword ||
      form.phone.length < 10 ||
      form.aadhar.length !== 12 ||
      !/^[0-9]{12}$/.test(form.aadhar) ||
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan.toUpperCase()) ||
      !form.acceptedTerms
    ) {
      setError("Please fill all fields correctly and accept the terms.");
      return;
    }

    setError("");
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful!");
    navigate("/kyc/start");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040D25] to-[#1E40AF] flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl top-[-10%] left-[-10%]"
        style={{
          background: "radial-gradient(circle at center, #0e1a5c, #040d25)",
          boxShadow: "0 0 20px 2px rgba(255,255,255,0.07)",
        }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bottom-[-10%] right-[-10%]"
        style={{
          background: "radial-gradient(circle at center, #123a9c, #0a184a)",
          boxShadow: "0 0 20px 2px rgba(255,255,255,0.07)",
        }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      ></motion.div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-24 z-10">
        <motion.div
          initial={{ opacity: 1, scale: 0.95, y: 0 }}
          animate={{ scale: 1, y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full max-w-[520px]"
        >
          <img
            src={loginIllustration}
            alt="Signup Illustration"
            className="w-full h-auto select-none"
            draggable={false}
          />
        </motion.div>

        <div
          className="w-full max-w-xl bg-white/10 backdrop-blur-xl border rounded-3xl p-12 space-y-8"
          style={{
            borderColor: "rgba(255, 255, 255, 0.12)",
            boxShadow: "0 0 8px 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-lg tracking-wide">
            Create your <span className="text-indigo-400">CitiChain</span> account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-white/80">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-white/80">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white/80">Aadhar Number</label>
                <input
                  type="text"
                  name="aadhar"
                  placeholder="123456789012"
                  value={form.aadhar}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">PAN Number</label>
                <input
                  type="text"
                  name="pan"
                  placeholder="ABCDE1234F"
                  value={form.pan}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 uppercase"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white/80">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/80">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={form.acceptedTerms}
                onChange={handleChange}
                className="accent-indigo-500 w-4 h-4"
              />
              <label className="text-sm">I accept the Terms & Conditions</label>
            </div>

            {error && (
              <p className="text-sm text-red-400 text-center">{error}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/40 transition-transform duration-300"
            >
              Sign Up
            </motion.button>

            <p className="text-center text-sm text-white/60">
              Already have an account?{" "}
              <Link
                to="/login/user"
                className="text-indigo-300 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
