import React from "react";
import Egg from "./Egg";

const Hen = ({ need }) => {
  return (
    <div>
      <Egg need={need} />
    </div>
  );
};

export default Hen;