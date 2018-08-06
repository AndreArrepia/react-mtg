/**
 *
 * CardsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { loadCards } from '../App/actions';
import { defaultAction } from '../CardsContainer/actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCardsContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Card from '../../components/Card';
import Wrapper from '../../components/Card/Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class CardsContainer extends React.Component {
  componentWillMount() {
    this.props.foo();
  }

  renderCard(item, index){
    return(
      <Card {...item} />
    )
  }
  
  render() { 
    return(
      <div>
        <Wrapper>
          {this.props.cardscontainer && this.props.cardscontainer.cards && this.props.cardscontainer.cards.map((item, index) => this.renderCard(item, index))}
        </Wrapper>
        <h1> Hello World i will be getting cards</h1>
      </div>
    );
  }
}

CardsContainer.propTypes = {
  foo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cardscontainer: makeSelectCardsContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    foo: () => dispatch(defaultAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cardsContainer', reducer });
const withSaga = injectSaga({ key: 'cardsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CardsContainer);
