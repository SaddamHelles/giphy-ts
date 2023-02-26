import React, { useReducer } from "react";

// interface INotesState {
//   value: string[];
// }

const initialState: INotesState = {
  value: [],
};
// interface toDoAction {
//   type: string;
//   text: string;
// }
// function reducer(state: INotesState, action: toDoAction) {
//   switch (action.type) {
//     case "add-note":
//       return [...state.value];
//     default:
//       return state.value;
//   }
// }

enum AtionKind {
  ADDNOTE = "add-note",
  OTHER = "new type",
}
interface INotesState {
  value: string[];
}
interface toDoAction {
  type: AtionKind;
  text: string[];
}
function reducer(state: INotesState, action: toDoAction) {
  const { type, text } = action;
  switch (type) {
    case "add-note":
      return {
        ...state,
        value: action.text,
      };
    default:
      return state;
  }
}
const Test = () => {
  const [toDos, dispatch] = useReducer(reducer, initialState);
  return <div>Test</div>;
};

export default Test;
