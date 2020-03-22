import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { Day } from "./day";
import { updateWeek } from "../actions";

class Week extends Component {
  render() {
    const { week, onDragEnd } = this.props;
    return (
      <div className="week">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(week.days).map(dayId => {
            const day = week.days[dayId];
            const items = day.itemIds.map(itemId => week.items[itemId]);
            return <Day key={day.id} day={day} items={items} />;
          })}
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  week: state.week
});

const mapDispatchToProps = dispatch => ({
  onDragEnd: result => dispatch(updateWeek(result))
});

export default connect(mapStateToProps, mapDispatchToProps)(Week);
