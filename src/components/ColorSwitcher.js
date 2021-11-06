import {useState} from "react"

function ColorSwitcher() {
  console.log("THe Component Has Rendered")

  let [color, setColor] = useState("green");

  console.log("On This render, the color is", color)

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "3px solid black",
          margin: "auto",
          backgroundColor: color,
        }}
      ></div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => {
            setColor("orange")
        }}>Orange</button>
        <button onClick={() => {
            setColor("red")
        }}>Red</button>
        <button onClick={() => {
            setColor("blue")
        }}>Blue</button>
      </div>
    </div>
  );
}

export default ColorSwitcher;
