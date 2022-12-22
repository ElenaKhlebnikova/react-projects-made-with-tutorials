import React from "react";
import Loading from "./assets/loading.gif";
function Spinner() {
  return (
    <div className="W-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={Loading}
        alt="Loading..."
      ></img>
    </div>
  );
}

export default Spinner;
