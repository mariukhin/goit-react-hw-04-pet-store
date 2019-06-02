import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';

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
  <div className={styles.petContainer}>
    <button className={styles.btnGoBack} type="button" onClick={onGoback}>
      <i className="material-icons">arrow_back</i>
      Return
    </button>
    <h2>All about {name}</h2>
    <div className={styles.infoContainer}>
      <img className={styles.petImage} src={image} alt={name} />
      <div className={styles.descriptionContainer}>
        <p>
          <b>Age: </b>
          {age}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Color: </b>
          {color}
        </p>
        <p>
          <b>Breed: </b>
          {breed}
        </p>
      </div>
    </div>
    <p>{description}</p>
  </div>
);
Pet.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onGoback: PropTypes.func.isRequired,
};
export default Pet;
