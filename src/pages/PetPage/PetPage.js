import React, { Component } from 'react';
import pets from '../../pets.json';
import Pet from '../../components/Pet/Pet';

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  state = {
    pet: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const petById = pets.find(item => item.id === id);
    this.setState({ pet: petById });
  }

  handleGoback = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return <div>{pet && <Pet {...pet} onGoback={this.handleGoback} />}</div>;
  }
}
