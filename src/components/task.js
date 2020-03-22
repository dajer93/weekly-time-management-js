import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import TaskTitle from './task-title';

export default (props) => {
  return <Draggable draggableId = {props.item.id} index={props.index}>
    {(provided, snapshot) => {
      let className = snapshot.isDragging ? "item dragging" : "item";
      return (
        <div className={className}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <TaskTitle title={props.item.content} />
          <button id={props.item.id} onClick={props.onRemove}>remove</button>
          <div className="itemTime">{props.item.time} hours</div>
        </div>
      )}
    }
  </Draggable>
}