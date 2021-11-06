import { Link } from "react-router-dom";

function Other() {
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
    </main>
  );
}

export default Other;
