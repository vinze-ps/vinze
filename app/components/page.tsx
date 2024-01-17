import React from "react";
import Combobox from "./test_components/combobox/Combobox";

const Components = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Combobox</h1>
      <Combobox data={[]} valueAccessor={"value"} />
    </>
  );
};

export default Components;
