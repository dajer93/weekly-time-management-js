import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateWeek } from "../actions";
import Week from '../components/week';

class App extends Component {

  render() {
    const { week, onUpdateWeek } = this.props;
    return <Week week={week} onDragEnd={onUpdateWeek} />;
  }
}

const mapStateToProps = state => ({
  week: state.week
});

const mapDispatchToProps = dispatch => ({
  onUpdateWeek: result => dispatch(updateWeek(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);