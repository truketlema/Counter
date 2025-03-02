import { useState } from "react";
import App from "../App";
export default function Counter() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    count > 0 ? setCount(count - 1) : setCount(0);
  }
  function Reset() {
    setCount(0);
  }
  const buttonStyle = {
    margin: "5px",
    padding: "10px",
    borderRadius: "15px",
    border: "none",
    backgroundColor: "rgb(223, 225, 231)",
    cursor: "pointer",
  };
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1
        style={{
          color: "#34528e",
          backgroundColor: "rgb(147, 171, 237)",
          boxShadow: "5px 5px 15px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "5px",
          width: "250px",
          margin: "0 auto",
          marginBottom: "15px",
        }}
      >
        Count value is:{count}
      </h1>
      <button style={buttonStyle} onClick={Increment}>
        Increment
      </button>
      <button style={buttonStyle} onClick={Decrement}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={Reset}>
        Reset
      </button>
    </div>
  );
}
