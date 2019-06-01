import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './PetList.module.css';

const PetList = ({ items = [], match, location }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <img className={styles.petImage} src={item.image} alt="petimage" />
        <Link
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
  items: PropTypes.array.isRequired,
  match: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default withRouter(PetList);
