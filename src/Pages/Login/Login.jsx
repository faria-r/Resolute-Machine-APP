import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.from?.pathname || "/";
  const { signIn, loginWithGoogle } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  //function to login a user
  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        navigate("/dashboard");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  //function to login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle(provider)
      .then((result) => {
        console.log(result.user);
        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="lg:flex justify-between h-[100vh]">
      <div className="h-[100vh] lg:w-[50vw] bg-orange-400">
        <TypeAnimation
          className="text-center mt-36 text-[50px] text-white font-mono"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Resolute Machine App",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Resolute Machine App",
            1000,
            "Resolute Machine App Manage Your Machines",
            1000,
            "Resolute Machine App Solves Your Critical Issues",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
      <div>
        <div className="pb-12 w-3/4 lg:w-[50vw] mx-auto  h-[70vh] my-auto">
          <TypeAnimation
            className="text-center mt-6 w-[50vw] mx-auto mb-6  text-[30px] text-orange-600 font-mono"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Login",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              " Login to Explore",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" border  shadow-xl border-orange-600 bg-transparent lg:w-[30vw] mb-16 mx-auto pt-12  px-8 bg-white opacity-70 h-[100vh] lg:h-[70vh]"
          >
            <div className="">
              <h2 className="text-5xl text-green-700 w-8 mx-auto text-center font-mono uppercase"></h2>
            </div>
            <div>
              <input
                className="w-full my-2 p-4 border"
                type="email"
                {...register("email")}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="w-full p-4 border"
                type="password"
                {...register("password")}
                placeholder="Password"
              />
            </div>

            <input
              className="btn mt-6 w-full bg-orange-600 text-white px-16 py-2"
              type="submit"
            />
            <button
              onClick={handleLoginWithGoogle}
              className="btn my-2 w-full bg-orange-600 text-white text-xl px-16 py-2 font-mono"
            >
              Log In With <FaGoogle></FaGoogle>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
