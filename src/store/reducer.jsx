/* const INITIAL_STATE = {
  Email: "sarim@gmail.com",
  Username: "Sarim Khan",
  Phone_No: 123456789,
  Designation: "Front End Developer",
};   ==> This is basic  */

const INITIAL_STATE = {
  users: [
    {
      Email: "sarim@gmail.com",
      Username: "Sarim Khan",
      Phone_No: 123456789,
      Designation: "Front End Developer",
    },
    {
      Email: "ahmed@gmail.com",
      Username: "Ahmed Khan",
      Phone_No: 123456789,
      Designation: "Flutter Developer",
    },
  ],
  name: "Haider",
};

/* const reducer = (state = INITIAL_STATE) => {
  console.log(action);
  return (state);
}; */

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

// action is for dispatching for updating data

export default reducer;
