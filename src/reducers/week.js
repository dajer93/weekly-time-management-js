import { UPDATE_WEEK } from "../actionTypes";
import { initialWeeklyData } from "../initial-data";

export default function moviesReducer(state = initialWeeklyData, action) {
  switch (action.type) {
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
