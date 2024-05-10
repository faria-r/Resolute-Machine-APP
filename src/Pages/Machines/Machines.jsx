import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Machine from "./Machine";

const Machines = () => {
  const axiosPublic = useAxiosPublic();
  const { isPending, error, data } = useQuery({
    queryKey: ["machines"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allMachines");
      console.log(res.data)
      return res.data;
    },
  });
  if (isPending) return "Loading.....";
  return (
    <div className="text-black text-center w-[80vw] mx-auto">
      <h2 className="text-center text-orange-600 text-2xl font-mono my-2">Listed Machines</h2>
      <div className="grid lg:grid-cols-3 gap-4 w-[80vw] mx-auto">
        {
data.map(machine => <Machine key={machine._id} machine={machine}></Machine>)
        }
      </div>
    </div>
  );
};

export default Machines;
