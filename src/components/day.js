import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Item from './task';

export default (props) => {
  let totalHours = 0;
  let totalHoursClass = "dayTotalHours";
  for(let item of props.items){
    totalHours += item.time;
  }
  if (totalHours > 24) totalHoursClass += " moreThan24";
  if (totalHours === 24) totalHoursClass += " perfect";
  return(
    <div className="dayWrapper">
      <h2 className="dayTitle">{props.day.title}</h2>
      <h3 className={totalHoursClass}>{totalHours} hours total</h3>
      <Droppable droppableId = {props.day.id}>
        {(provided, snapshot) => (
          <div 
            className="dayContent"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.items.map((item, index) => <Item key={item.id} item={item} index={index} onRemove={props.onRemove} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}