import { useState, useEffect } from "react";
import { Loop, Condition, useFetch } from "merced-react-hooks";

function Pokemon(props) {
  const [pokemon, refetchPokemon] = useFetch("https://dummydata.netlify.app/")

  return (
    <div>
      <Condition if={pokemon} ifnot={<h1>No Pokemon</h1>}>
        {() => (
          <Loop
            withthis={pokemon}
            dothat={(aPokemon) => {
              return <h1>{aPokemon.name}</h1>;
            }}
          />
        )}
      </Condition>
    </div>
  );
}

export default Pokemon;
