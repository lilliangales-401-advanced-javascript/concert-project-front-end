
export default (state = [], action) => {
  // validation
  switch (action.type) {
    case 'FETCH_CONCERTS':
      return action.payload;
    case 'ADD_CONCERTS':
      return [...state, action.payload];
    case 'DELETE_CONCERTS': {
      const updatedState = state.filter((concert) => concert.id !== action.payload);
      return [...updatedState];
    }
    case 'UPDATE_CONCERTS': {
      const updatedState = state.map((concert) => {
        if (concert.id === action.payload.id) {
          concert.artist = action.payload.artist;
          concert.date = action.payload.date;
        }
        return concert;
      });
      return [...updatedState];
    }
    default:
      return state;
  }
};
