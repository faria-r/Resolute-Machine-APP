import React from "react";
import Button from "../../Components/Button/Button";

const Machine = ({ machine }) => {
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
  } = machine;
  const myStyle = {
    color: "white",
    padding: "4px",
    backgroundColor: "red",
    padding: "8px",
    fontFamily: "Arial",
  };
  return (
    <div className="border p-2">
      <div>
        <h2 className="text-start font-bold mb-2">{name}</h2>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <div>
          <img className="w-[120px] h-[120px]" src={picture} alt="" srcset="" />
        </div>
        <div className="text-start">
          <h2>Machines Active:{active}</h2>
          <h2>Machines Idle:{idle}</h2>
          <h2 className="text-orange-600">Alerts:{alerts}</h2>
          <h2 className="text-orange-600">Power Con:{power} KW</h2>
        </div>
      </div>
      <div className="text-red-600 font-bold border-t-[1px] my-2 flex justify-between items-center gap-2 p-2">
        <div>
          <h2>Detailed Overview</h2>
        </div>
        <div>
          <h2>Download Report</h2>
        </div>
      </div>
      {condition ? (
        <Button value={"Optimal Condition"}></Button>
      ) : (
        <Button style={myStyle} value={"Critical Condition"}></Button>
      )}
    </div>
  );
};

export default Machine;
