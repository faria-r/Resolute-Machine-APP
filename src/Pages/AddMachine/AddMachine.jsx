import React from "react";
import { useForm } from "react-hook-form";
import { TbLayoutGridAdd } from "react-icons/tb";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddMachine = () => {
    const axiosPublic = useAxiosPublic();
  //generate a unique key for each machine
  const generateKey = () => {
    let min = 150000000000;
    let max = 250000000000;
    const key = Math.floor(Math.random() * (max + min + 1)) + min;
    return key;
  };

  const { register, handleSubmit } = useForm();

  //handling add machine to database
  const handleAddMachine = (data)=>{
   const machineInfo = {
    id: data._id ,
    condition: data.condition ,
    picture: data.photo ,
    idle: data.idle ,
    active: data.active ,
    alerts: data.alerts ,
    name: data.name ,
    power: data.power ,
    runtime: data.runtime ,
    reporting: data.reporting ,
    message: data.message 
   }
 
console.log(machineInfo)
axiosPublic.post('/allMachines',machineInfo)
.then(res =>{
    console.log(res.data)
    if(res.data.insertedId){
        Swal.fire({
            title: "Successfully Added A New Machine",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    }
    else{
      Swal.fire({
        title: "This Machine is already Exists , Add A New One",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
    }
    data.reset();
})
  }

  return (
    <div className="text-orange-600 lg:w-[70vw] mx-auto">
      <h2 className="w-[20vw] my-4 text-2xl font-bold mx-auto text-center flex justify-between items-center border-b-[1px] border-orange-700 p-2">
        {" "}
        <TbLayoutGridAdd /> Add New Machine
      </h2>

      <form
        className="grid lg:grid-cols-3 gap-4 p-6 w-[70vw] mx-auto border-x-[2px] border-orange-700"
        onSubmit={handleSubmit(handleAddMachine)}
      >
         <div>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("name")}
          >
            <option disabled selected>
              Enter Name/Location
            </option>
            <option>Gujrat 2 Malls</option>
            <option>Mumbai 1 Malls</option>
            <option>Kolkata 4 Malls</option>
            <option>Siliguri 5 Malls</option>
            <option>Lake Circus 6 Malls</option>
            <option>Kornatok 1 Malls</option>
            <option>Uttor Pradesh 1 Malls</option>
            
          </select>
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="text"
            {...register("photo")}
            placeholder="Enter Machine Photo URL"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="number"
            {...register("idle")}
            placeholder="Machine Idle Number"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="number"
            {...register("active")}
            placeholder="Active Machine Number"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="number"
            {...register("alerts")}
            placeholder="Number of Alerts of Machine"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="number"
            {...register("power")}
            placeholder="Power Consumption/hour"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="number"
            {...register("runtime")}
            placeholder="Enter Runtime"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="number"
            {...register("reporting")}
            placeholder="Enter Reporting Hours"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="text"
            {...register("message")}
            placeholder="Enter Critical Conditon Message"
          />
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("condition")}
          >
            <option disabled selected>
              Critical Condition
            </option>
            <option>true</option>
            <option>false</option>
          </select>
        </div>

        <div className="col-span-2">
          <input
            className="w-full p-4 border"
            type="text"
            {...register("_id")}
            readOnly
            defaultValue={generateKey()}
          />

          <span className="label-text-alt font-bold text-orange-700">
            Autogenerated Unique Key
          </span>
        </div>

        <input
          className="btn col-span-3 items-center w-[100%] mx-auto bg-orange-600 text-white px-16 py-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddMachine;
