import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UserMachines = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosPublic = useAxiosPublic();
  const {isPending, data} = useQuery({
    queryKey:['userData'],
    queryFn: async ()=>{
        const res = await axiosPublic.get(`/users/${user.email}`)
        return res.data;
    }
  })
  if(isPending){
    return 'Loading user data .........'
  }
  return (
    <div className="text-orange-600">
      <h2>{data?.machine}</h2>
    </div>
  );
};

export default UserMachines;
