import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../utils/auth";
import { AuthContext } from "../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();

  const { user, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("https://cmsback.sampaarsh.cloud/auth/login", {
      email,
      password,
    });
    console.log(res);
    const token = res.data.token;
    const user = res.data.user;
    const role = res.data.user.role;

    console.log(role);

    login(user);
    setAuth(token, user);

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "patient") {
      navigate("/patient");
    } else if (role === "doctor") {
      navigate("/doctor");
    } else if (role === "receptionist") {
      navigate("/receptionist");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-emerald-700">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-800 md:text-2xl">
              Clinic Queue
            </h1>
            <span className="text-gray-500">sign in</span>
          </div>
          <form className="space-y-4 px-3 pb-2 md:space-y-6" action="#">
            <div>
              <label>Email</label>
              <input
                placeholder="email"
                className="p-2 w-full mb-3 rounded-lg border-gray-400 border focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                placeholder="password"
                type="password"
                className="border p-2 w-full mb-3 rounded-lg border-gray-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-md"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-emerald-800 text-white p-2 w-full rounded-lg mb-2"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
