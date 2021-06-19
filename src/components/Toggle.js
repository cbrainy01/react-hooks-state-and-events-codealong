import React, {useState} from "react";



function Toggle() {

  const [condition, setCondition] = useState(false);
  //create function that gets called when button element is clicked
  function handleClick() {
    return setCondition(!condition)
  }
  return <button onClick={()=>{handleClick()}}>{condition? "ON": "OFF"}</button>;
}

export default Toggle;
