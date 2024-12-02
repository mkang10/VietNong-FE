"use client"; // Đánh dấu component này là Client Component

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { loginUser } from "@/ultis/AuthAPI"; // Đảm bảo đường dẫn đúng
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Xử lý trạng thái từ localStorage trong môi trường client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem("username") || "";
      const storedRememberMe = localStorage.getItem("rememberMe") === "true";

      setUsername(storedUsername);
      setRememberMe(storedRememberMe);
    }
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const credentials = { username, password };

    try {
      const data = await loginUser(credentials);

      if (data.code === 200 && data.data?.token) {
        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("roleId", data.data.account.roleId.toString());
          localStorage.setItem("userId", data.data.account.userId.toString());
          localStorage.setItem("username", username);

          if (rememberMe) {
            localStorage.setItem("rememberMe", "true");
          } else {
            localStorage.removeItem("rememberMe");
          }
        }

        setError("");
        const roleId = data.data.account.roleId;

        switch (roleId) {
          case 4:
            router.push("/");
            break;
          case 3:
            router.push("/Welcome");
            break;
          default:
            setError("Quyền truy cập không hợp lệ");
        }
      } else {
        setError(data.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      setError("Lỗi kết nối, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <div>
            <Link href="/">
              <IoIosArrowRoundBack className="back-icon" />
            </Link>
          </div>

          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <Link href="/forgotpassword">Forgot Password</Link>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Login"}
          </button>

          <div className="register-link">
            <p>
              Do not have an account? <Link href="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Bọc LoginForm trong Suspense
const LoginFormWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginFormWrapper;
