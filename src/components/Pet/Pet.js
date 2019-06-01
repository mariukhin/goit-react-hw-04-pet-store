import React from 'react';

const Pet = ({
  name,
  image,
  age,
  gender,
  color,
  breed,
  description,
  onGoback,
}) => (
  <div>
    <button type="button" onClick={onGoback}>
      Return
    </button>
    <h2>All about {name}</h2>
    <img src={image} alt={name} />
    <p>
      <b>Age: {age}</b>
    </p>
    <p>
      <b>Gender: {gender}</b>
    </p>
    <p>
      <b>Color: {color}</b>
    </p>
    <p>
      <b>Breed: {breed}</b>
    </p>
    <p>{description}</p>
  </div>
);
export default Pet;
