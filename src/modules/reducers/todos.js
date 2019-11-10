export const CHANGE_INPUT = "todos/CHANGE_INPUT";
export const INSERT = "todos/INSERT";
export const TOGGLE_CHECK = "todos/TOGGLE_CHECK";
export const REMOVE = "todos/REMOVE";

let id = 1;
export const insert = title => ({
  type: INSERT,
  payload: {
    id: ++id,
    title,
    done: false
  }
});

export const toggleCheck = id => ({ type: TOGGLE_CHECK, payload: id });
export const remove = id => ({ type: REMOVE, payload: id });

const initialState = {
  todos: [
    { id: 0, title: "123123123", done: false },
    { id: 1, title: "123214124", done: true }
  ]
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat({ ...action.payload })
      };
    case TOGGLE_CHECK:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? {
                ...todo,
                done: !todo.done
              }
            : todo
        )
      };
    case REMOVE:
      console.log(action.id + "---------");
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default todos;
