import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './PetList.module.css';

const PetList = ({ items = [], match, location }) => (
  <ul className={styles.petList}>
    {items.map(item => (
      <li className={styles.petListItem} key={item.id}>
        <img className={styles.petImage} src={item.image} alt="petimage" />
        <Link
          className={styles.petLink}
          to={{
            pathname: `${match.path}/${item.id}`,
            state: { from: location },
          }}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);
PetList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  match: PropTypes.shape.isRequired,
  location: PropTypes.shape.isRequired,
};
export default withRouter(PetList);
