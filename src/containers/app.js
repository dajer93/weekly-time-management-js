import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Week } from '../components/week';

class App extends Component {

  render() {
    console.log(this.props);
    return <Week />;
  }
}

const mapStateToProps = state => ({
  week: state.week
})

// const mapDispatchToProps = dispatch => ({
//   onLogin: credentials => dispatch(login(credentials))
// })

export default connect(
  mapStateToProps
  // mapStateToProps,
  // mapDispatchToProps
)(App);