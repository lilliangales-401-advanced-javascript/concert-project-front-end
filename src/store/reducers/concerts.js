export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONCERTS':
      return action.payload;
    case 'ADD_CONCERTS':
      return [...state, action.payload];
    default:
      return state;
  }
};
