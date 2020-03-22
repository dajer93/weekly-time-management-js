import { 
  UPDATE_WEEK,
  REMOVE_TASK,
  ADD_TASK 
} from "../actionTypes";
import { initialWeeklyData } from "../initial-data";
import uniqid from "uniqid";

export default function moviesReducer(state = initialWeeklyData, action) {
  switch (action.type) {
    case REMOVE_TASK: 
      console.log(action.payload.target.id)
      let newDays = state.days;
      for (let key in state.days) {
        let newItemIds = state.days[key].itemIds;
        let foundIndex = newItemIds.indexOf(action.payload.target.id);
        if ( foundIndex !== -1 ){
          newItemIds.splice(foundIndex, 1);
        }
        newDays = {
          ...state.days,
          [key]: {
            ...state.days[key],
            itemIds: newItemIds
          }
        };
      }
      let newItems = state.items;
      delete newItems[action.payload.target.id];
      return {
        ...state,
        days: newDays,
        items: newItems
      };
    case ADD_TASK: 
      let uniqueID = uniqid();
      let newItem = {
        ...action.payload.item,
        id: uniqueID
      }
      let newItemIds = state.days[action.payload.day].itemIds;
      newItemIds.push(newItem.id);
      return {
        ...state,
        days: {
          ...state.days,
          [action.payload.day]: {
            ...state.days[action.payload.day],
            itemIds: newItemIds
          }
        },
        items: {
          ...state.items,
          [uniqueID]: newItem
        }
      };
    case UPDATE_WEEK:
      const { source, destination, draggableId } = action.payload;

      if (!destination) return state;
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
        return state;

      const dayDragStart = state.days[source.droppableId];
      const dayDragFinish = state.days[destination.droppableId];

      if (dayDragStart === dayDragFinish) {
        const newItemIds = Array.from(dayDragStart.itemIds);
        newItemIds.splice(source.index, 1);

        const newDayStart = {
          ...dayDragStart,
          itemIds: newItemIds
        };
        return {
          ...state,
          days: {
            ...state.days,
            [newDayStart.id]: newDayStart
          }
        };
      } else {
        const newStartItemIds = Array.from(dayDragStart.itemIds);
        newStartItemIds.splice(source.index, 1);

        const newDayStart = {
          ...dayDragStart,
          itemIds: newStartItemIds
        };

        const newFinishItemIds = Array.from(dayDragFinish.itemIds);
        newFinishItemIds.splice(destination.index, 0, draggableId);

        const newDayFinish = {
          ...dayDragFinish,
          itemIds: newFinishItemIds
        };

        return {
          ...state,
          days: {
            ...state.days,
            [newDayStart.id]: newDayStart,
            [newDayFinish.id]: newDayFinish
          }
        };
      }
    default:
      return state;
  }
}
