import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Day from './day';

export default (props) =>  {
  const { week, onDragEnd } = props;
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