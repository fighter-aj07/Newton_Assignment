import { useRef, useState } from "react";

function UseRef() {
  const inputRef = useRef(null);
    const [display, setDisplay] = useState("");
  const handleClick = () => {
  };

  return (
    <div>
      <input type="text" ref={} id="text"/>
      <button onClick={handleClick} id="button">Focus Input</button>
      {display !== "" && <h1 id="disp">{}</h1>}
    </div>
  );
}

export default UseRef;
