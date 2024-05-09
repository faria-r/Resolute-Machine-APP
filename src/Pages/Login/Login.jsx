import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
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
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
    navigate(from, { replace: true });
  };

  //function to login with google
  const handleLoginWithGoogle = () => {
    loginWithGoogle(provider)
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photo: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/dashboard");
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="lg:flex justify-between items-center">
      <div className="h-[100vh]">
        <img
          className="h-[100vh] w-[50vw]"
          src="https://i.ibb.co/H7tZZYw/dsf.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <div className="py-12 pb-28 w-[50vw] mx-auto h-[80vh] my-auto">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" border  shadow-xl border-orange-600 bg-transparent lg:w-[30vw] mb-16 mx-auto pt-12  px-8 bg-white opacity-70 h-[70vh]"
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
