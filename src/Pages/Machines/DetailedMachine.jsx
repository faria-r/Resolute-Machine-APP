import React from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "../Chart/Chart";

const DetailedMachine = () => {
  const data = useLoaderData();
  const {
    _id,
    condition,
    picture,
    idle,
    active,
    alerts,
    name,
    power,
    runtime,
    reporting,
    message,
  } = data;
  const utilization = runtime / reporting;
  const utilizationP = (utilization * 100).toFixed(2);
  const lifeSpan = runtime * reporting;
  return (
    <div className="w-[65vw] lg:w-[75vw] mx-auto my-2 border  px-2 ">
      {condition ? (
        <p className="bg-orange-300 text-orange-600 lg:text-3xl font-bold font-mono">
          Condition is Safe
        </p>
      ) : (
        <p className="bg-red-600  font-mono rounded lg:text-xl text-white">
          {message} <br />
          <span className="text-xs">
            The Chiller has been operated for an extend period of time and its
            condenser is over heated.
          </span>
        </p>
      )}
      <div className=" border mb-2 flex text-xs text-black text-start justify-between p-2 items-center gap-2">
        <div>
          <h2 className="text-xl font-bold">Possible Causes</h2>
          <p>Insufficent Charge</p>
          <p>Low Load Operate</p>
          <p>Refrigerent Level Control System Down</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Possible Impacts</h2>
          <p>Insufficent Charge</p>
          <p>Low Load Operate</p>
          <p>Refrigerent Level Control System Down</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 text-black text-start">
        <div className="border p-2">
          <h2>Reporting Period Hours</h2>
          <h2 className="text-xs font-semibold my-2">previous 7 days</h2>
          <p className="text-xl font-bold font-mono my-2">{reporting} hrs</p>
        </div>
        <div className="border p-2">
          <h2>Runtime Hours</h2>
          <h2 className="text-xs font-semibold my-2">previous 7 days</h2>
          <p className="text-xl font-bold font-mono my-2">{runtime} hrs</p>
        </div>
        <div className="border p-2">
          <h2>Utilization</h2>
          <h2 className="text-xs font-semibold my-2">previous 7 days</h2>
          <p className="text-xl font-bold font-mono my-4">{utilizationP} %</p>
        </div>
        <div className="border p-2">
          <h2>Total Lifespan Hours</h2>
          <h2 className="text-xs font-semibold my-2">previous 7 days</h2>
          <p className="text-xl font-bold font-mono my-2">{lifeSpan} hrs</p>
        </div>
      </div>
      <div className="w-3/4 lg:flex justify-center gap-2">
        <div className="-ml-20 lg:-mt-16">
          <Chart></Chart>
        </div>
        <div>
          <h2 className="text-red-500 mt-8 font-mono text-2xl font-semibold">
            Fault History
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DetailedMachine;
