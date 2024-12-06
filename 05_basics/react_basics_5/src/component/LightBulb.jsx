import React, { useContext } from "react";
import { BulbContext } from "./BulbProvider";

const LightBulb = () => {
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <Bulb />
      </div>
      <ToggleBulb />
    </div>
  );
};

function Bulb() {
  const { isBulbOn } = useContext(BulbContext);
  return (
    <div>
      {isBulbOn ? (
        <i
          className="ri-lightbulb-fill"
          style={{ fontSize: "100px", color: "yellow" }}
        ></i>
      ) : (
        <i
          className="ri-lightbulb-line"
          style={{ fontSize: "100px", color: "black" }}
        ></i>
      )}
    </div>
  );
}

function ToggleBulb() {
  const { setisBulbOn } = useContext(BulbContext);
  return (
    <div>
      <button onClick={() => setisBulbOn((isBulbOn) => !isBulbOn)}>
        Toggle Bulb
      </button>
    </div>
  );
}

export default LightBulb;
