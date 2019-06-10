import pets from '../assets/pets.json';

export function getIdFromProps(props) {
  return props.match.params.id;
}
export function petById(id) {
  return pets.find(item => item.id === id);
}
export const checkId = ({ match: { params } }, petId) => {
  const idFromMatch = params[petId];
  return petById(idFromMatch);
};
