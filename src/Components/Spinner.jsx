import React from "react";
import laoding from "./laoding.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={laoding} alt="laoding" height={"35rem"} />
    </div>
  );
};

export default Spinner;
