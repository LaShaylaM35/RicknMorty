import React, { useState } from "react";

import { Cards } from "../components/Cards";

export const CharacterDossier = () => {
  const [character, setCharacter] = useState([]);
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/1/",
  );
  

  const getCharacter = async () => {
    const result = await fetch(url);
    const data = await result.json();

    setCharacter(data);
  };
  const onSubmitId = (event) => {
    setUrl(`https://rickandmortyapi.com/api/character/${event.target.value}`);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getCharacter();
  };

 

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label"> Enter Character Id </label>
          <input
            type="number"
            id="name"
            onChange={onSubmitId}
            className="form-control"
          />
        </div>

        <button className="btn btn-success">Search</button>
      </form>

      <h5 className="mt-3">Character Details</h5>
      {
        <Cards
          key={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
        />
      }
    </>
  );
};
