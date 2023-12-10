import React from "react";
import { ThreeDots } from "react-loader-spinner";


function Loader() {
  return (
    <ThreeDots
      height="22"
      width="30"
      radius="9"
      color="white"
      ariaLabel="three-dots-loading"
      wrapperClass="loader"
      visible={true}
    />
  );
}

export default Loader;
