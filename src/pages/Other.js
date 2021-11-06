import { Link } from "react-router-dom";
import { useDataStore } from "../MoreAppState";

function Other() {
  const { dataStore, dispatch } = useDataStore();
  const words = ["cheese", "bread", "fun", "woaahhh"];
  return (
    <main>
      {words.map((word, index) => {
        return (
          <div key={index}>
            <Link to={`/param/${index}/${word}`}>
              <h2>{word}</h2>
            </Link>
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch({ type: "pink" });
        }}
      >
        Pink
      </button>
      <button
        onClick={() => {
          dispatch({ type: "blue" });
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          dispatch({ type: "green" });
        }}
      >
        Blue
      </button>
    </main>
  );
}

export default Other;
