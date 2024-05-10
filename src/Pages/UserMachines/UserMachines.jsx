import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Machine from "../Machines/Machine";

const UserMachines = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });

  //get name based machine data
  const name = data?.machine;
  const { isPending: isLoading, data: machine } = useQuery({
    queryKey: [name, "machineData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allMachines/${name}`);
      return res.data;
    },
  });
if (isPending) {
  return <span className="loading absolute top-[40%] left-[40%] text-5xl  loading-spinner text-warning"></span>;
}
  if (isLoading) {
    return <span className="loading absolute top-[40%] left-[40%] text-5xl loading-spinner text-warning"></span>;
  }
  return (
    <div className="text-orange-600 w-[70vw] mx-auto my-6 ">
      <h2 className="text-3xl font-semibold my-3 border-b-[1px] border-orange-800 p-2">Assigned Machines List</h2>
    <div className="w-[28vw]"> <Machine machine={machine}></Machine></div>
    </div>
  );
};

export default UserMachines;
