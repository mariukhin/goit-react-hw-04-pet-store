import React from 'react';
import pets from '../../pets.json';
import PetList from '../../components/PetList/PetList';

const PetsPage = () => (
  <div>
    <h1>Available pets</h1>
    <PetList items={pets} />
  </div>
);
export default PetsPage;
