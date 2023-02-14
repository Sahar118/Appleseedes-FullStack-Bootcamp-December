import React, { useState } from "react";
import CustomButton from "./component/CustomButton";

function App() {

  const [color1, setColor] = useState(" ");

  const btnHandler = (el) => {
    setColor(el);
  };

  const colors = ["blue", "red", "yellow"];
  return (
    <div>
      {colors.map((el) => {
        return <CustomButton color={el} callBackFun={btnHandler} > {el}</CustomButton>;
      })}

      <h2> The Color Selected is {color1} </h2>
    </div>


  );
}

export default App;