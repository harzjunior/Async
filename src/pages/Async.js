import React from "react";
import DemoCbh from "../components/async/DemoCbh";
import FetchDb from "../components/async/FetchDb";
import SampleFile from "../components/async/promises/SampleFile";

const Async = () => {
  return (
    <div>
      <DemoCbh />
      <FetchDb />
      <SampleFile />
    </div>
  );
};

export default Async;
