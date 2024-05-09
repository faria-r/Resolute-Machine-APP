import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { SiGnuprivacyguard } from "react-icons/si";
const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleCreateUser = (data) =>{
    createUser(data.email,data.password)
    .then((result) => {
        const user = result.user;
        console.log(user);
        // updateUserProfile(data.name,data.photoURL)
        // .then(()=>{
        //   console.log('user profile is updated')
        //   //create user entry in the database
        //   const userInfo = {
        //     name:data.name,
        //     email:data.email,
        //     photo:data.photoURL
        //   }
        //   axiosPublic.post('/users',userInfo)
        //   .then(res => {
        //     console.log(res.data)
        //     if(res.data.insertedId){
        //       reset();
        //       Swal.fire({
        //         title: "Updated User Information",
        //         showClass: {
        //           popup: `
        //             animate__animated
        //             animate__fadeInUp
        //             animate__faster
        //           `
        //         },
        //         hideClass: {
        //           popup: `
        //             animate__animated
        //             animate__fadeOutDown
        //             animate__faster
        //           `
        //         }
        //       });
        //       navigate('/login')
        //     }
        //   console.log('added in db')
        //   })
        //   .catch(e => console.log(e))
     
        
        // })
      })
      .catch((error) => {
        console.log(error);
      });
      

  }
 
  return (
    <div className=" w-[70vw] mx-auto  py-16 ">
    <form
      onSubmit={handleSubmit(handleCreateUser)}
      className=" border shadow-xl border-sky-950 bg-transparent lg:w-[30vw] mb-16 mx-auto py-8  px-8 bg-white opacity-75"
    >
      <h2 className="text-3xl w-16 mx-auto text-green-700 text-center font-mono uppercase">
      <SiGnuprivacyguard className="text-orange-600" />
      </h2>
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
        className="btn mt-6 w-full bg-sky-950 text-white px-16 py-2"
        type="submit"
      />
    
    </form>
  </div>
  );
};

export default UserForm;
