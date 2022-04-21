const initialState = [
  {
    id: 0,
    name: "Aditya Singh",
    email: "adityac620@gmail.com",
    number: 1234567890,
  },
  {
    id: 1,
    name: "Test",
    email: "test123@gmail.com",
    number: 1987654321,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default contactReducer;
