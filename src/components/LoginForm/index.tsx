import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context";
import classNames from "classnames";

const Login: React.FC = () => {
  const { userData, setUserData } = useContext<any>(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const passwordRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!formData.email || !formData.password) return;
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    setUserData(formData);

    navigate("/");
    setIsLoading(false);
  };

  async function handleForgetPassword() {
    if (!formData.email) {
      toast("Please Enter Email..");
      return;
    }
  }

  const togglePassword = () => {
    let passwordInputField = passwordRef.current as any;
    if (passwordInputField.type === "password") {
      passwordInputField.type = "text";
    } else {
      passwordInputField.type = "password";
    }
  };

  useEffect(() => {}, []);

  return (
    <div
      className={classNames({
        "relative w-screen h-[95vh]": true,
        "flex items-center justify-center": true,
        "bg-transparent md:px-10": true,
      })}
    >
      {/* Image Section */}
      <section
        className={classNames({
          "relative rounded-xl w-[47.5%] h-full": true,
          "hidden md:flex": true,
          "flex-col justify-center items-center": true,
        })}
      >
        <div
          className={classNames({
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2":
              !true,
            "rounded-xl w-[90%] h-[90%] z-10": true,
            "flex flex-col justify-center items-center": true,
            "bg-top bg-no-repeat bg-cover": true,
          })}
          style={{ backgroundImage: "url(/bg-3.jpg)" }}
        >
          <div
            className={classNames({
              "relative z-[20] w-fit mr-10": true,
              "flex flex-col justify-center items-start": true,
              "text-gray-100": true,
            })}
          >
            <h1 className="bound lg:text-[3rem] text-[2.25rem] drop-shadow-xl">
              ScoreMine
            </h1>
            <h1
              className={classNames({
                "px-3 py-1": true,
                "mento text-3xl": true,
                "shadow-xl bg-black ": true,
              })}
            >
              smash your limits.
            </h1>
          </div>
        </div>
      </section>
      {/* Form Section... */}
      <section
        className={classNames({
          "relative mx-auto rounded-3xl": true,
          "flex flex-col justify-center items-center": true,
          "w-[95vw] md:w-[47.5%] h-screen": true,
          "bg-[var(--page-color)] dark:bg-gray-900 shadow": true,
        })}
      >
        <img
          className="invert absolute w-32 z-10 top-24 right-20 rounded-full dark:invert-0"
          src="/polka.png"
        />
        <form className="z-20" onSubmit={handleSubmit}>
          {/* Loading Section */}
          {isLoading && (
            <img className="h-4 my-1" src="https://i.gifer.com/VAyR.gif" />
          )}
          {/* Email... */}
          <div className="flex items-center py-2 px-3 rounded-2xl mb-4 bg-white border-[1px] border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              required
              className="pl-2 outline-none border-none"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          {/* Password... */}
          <div className="flex items-center py-2 px-3 rounded-2xl mb-4 bg-white border-[1px] border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              ref={passwordRef}
              required
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <img
              src={"/eye.svg"}
              width={14}
              height={16}
              className="opacity-40 cursor-pointer"
              onClick={togglePassword}
            />
          </div>
          {/* From Actions... */}
          <button
            type="submit"
            className={classNames({
              "block w-full mt-4 py-2 rounded-xl mb-2": true,
              "text-white font-bold bound": true,
              "transition ease-in-out hover:scale-[1.025]": true,
              "bg-blue-600 dark:bg-indigo-600 hover:bg-blue-700": true,
            })}
          >
            Login
          </button>
          <span
            onClick={handleForgetPassword}
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer comfort dark:text-gray-50"
          >
            Forgot Password ?
          </span>
        </form>

        {/* Signup... */}
        <div className="w-20 h-2 rounded-b-3xl border-black border-[1px] mx-auto my-10 dark:border-gray-50" />
        <div>
          <h1 className="font-bold mento text-xl dark:text-gray-50">
            Don't have an account?
          </h1>

          <Link to={"/signup"}>
            <button
              type="submit"
              className={classNames({
                "block rounded-xl w-full hover:bg-blue-500": true,
                "mt-4 py-2 mb-2": true,
                "font-bold bound text-black dark:text-gray-50 hover:text-white":
                  true,
                "border-2 border-black dark:border-gray-50": true,
                "hover:scale-[1.05] transition-all ease-in-out nav-ripple":
                  true,
              })}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
