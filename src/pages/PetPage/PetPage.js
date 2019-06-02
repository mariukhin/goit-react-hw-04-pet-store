import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../../components/Pet/Pet';
import { getIdFromProps, petById } from '../../service/helper';

export default class PetPage extends Component {
  static propTypes = {
    history: PropTypes.shape.isRequired,
    location: PropTypes.shape.isRequired,
  };

  state = {
    pet: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    this.setState({ pet: petById(id) });
  }

  handleGoback() {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/pets');
  }

  render() {
    const { pet } = this.state;
    return <div>{pet && <Pet {...pet} onGoback={this.handleGoback} />}</div>;
  }
}
