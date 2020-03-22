import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateWeek, removeTask, addTask } from "../actions";
import Week from '../components/week';
class App extends Component {

  render() {
    const { week, onUpdateWeek, onRemoveTask, onAddTask } = this.props;
    return <>
      <Week week={week} onDragEnd={onUpdateWeek} onRemove={onRemoveTask} onAdd={onAddTask} />
    </>
  }
}

const mapStateToProps = state => ({
  week: state.week
});

const mapDispatchToProps = dispatch => ({
  onUpdateWeek: result => dispatch(updateWeek(result)),
  onRemoveTask: result => dispatch(removeTask(result)),
  onAddTask: (day, item) => dispatch(addTask({day, item}))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);