import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

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
    <div className="text-black text-center w-[70vw] mx-auto">
      <h2 className="text-center text-orange-600 text-2xl font-mono my-2">Listed Machines</h2>
    </div>
  );
};

export default Machines;
