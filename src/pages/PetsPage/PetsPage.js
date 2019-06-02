import React from 'react';
import pets from '../../assets/pets.json';
import PetList from '../../components/PetList/PetList';
import styles from './PetsPage.module.css';

const PetsPage = () => (
  <div className={styles.petPageContainer}>
    <h1>Available pets</h1>
    <PetList items={pets} />
  </div>
);
export default PetsPage;
