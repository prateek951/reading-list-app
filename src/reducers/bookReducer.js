import uuid from "uuid/v1";

export default (state, { type, payload }) => {
  switch (type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: payload.title,
          author: payload.author,
          id: uuid()
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== payload);
    default:
      return state;
  }
};
