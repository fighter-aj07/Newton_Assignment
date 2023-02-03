import { useRef, useState } from "react";

function UseRef() {
  const inputRef = useRef(null);
    const [display, setDisplay] = useState("");
  const handleClick = () => {
    inputRef.current.focus();
    setDisplay(inputRef.current.value)
  };

  return (
    <div>
      <input type="text" ref={inputRef} id="text"/>
      <button onClick={handleClick} id="button">Focus Input</button>
      {display !== "" && <h1 id="disp">{display}</h1>}
    </div>
  );
}

export default UseRef;
