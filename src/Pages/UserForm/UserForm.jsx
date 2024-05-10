import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { IoIosPersonAdd } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["machines"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allMachines");
      return res.data;
    },
  });

  if (isPending) return "Loading.....";
  const handleCreateUser = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
          console.log('user profile is updated')
          //create user entry in the database
          const userInfo = {
            name:data.name,
            email:data.email,
            photo:data.photoURL,
            machine:data.machine
          }
          console.log(userInfo)
          axiosPublic.post('/users',userInfo)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              console.log('added in db')
              Swal.fire({
                title: "Added A New User",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            }
          
          })
          .catch(e => console.log(e))

        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" w-[70vw] mx-auto  py-16 ">
      <h2 className="text-3xl w-16 mx-auto text-green-700 text-center font-mono uppercase">
        <IoIosPersonAdd className="text-orange-600 mb-8 text-5xl" />
      </h2>
      <form
        onSubmit={handleSubmit(handleCreateUser)}
        className=" border grid grid-cols-3 gap-4  shadow-xl text-orange-600 border-orange-700 bg-transparent lg:w-[70vw] mb-16 mx-auto py-8  px-8 bg-white opacity-75"
      >
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="text"
            {...register("name")}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="text"
            {...register("photoURL")}
            placeholder="PhotoURL"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="email"
            {...register("email")}
            placeholder="Assign a  Email"
          />
        </div>
        <div>
          <input
            className="w-full p-4 border"
            type="password"
            {...register("password")}
            placeholder="Assign a Password"
          />
        </div>

        <select
          className="select w-full text-orange-600 border max-w-xs"
          {...register("machine")}
        >
          <option disabled selected className="text-orange-600">
            Assign A Machine
          </option>
          {data.map((m) => (
            <option key={m._id} m={m}>
              {m.name}
            </option>
          ))}
        </select>

        <input
          className="btn w-full bg-orange-600 text-white px-16 py-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UserForm;
