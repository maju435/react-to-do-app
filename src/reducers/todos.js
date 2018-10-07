const initialState = [];

const todos = (state = initialState, action) => {

  let listOfToDos = state.slice();
  let numberOfToDos = listOfToDos.filter(item => !item.completed ? 1 : null);

  switch(action.type) {
    case 'TODO_FETCH':
      return [...state];

    case 'TODO_FETCH_SUCCEEDED':
      if (numberOfToDos.length <= 10) {
        return [
          ...state,
          action.payload
        ];
      } else {
        return [...state]
      }
    case 'TODO_FETCH_FAILED':
      return [];
    case 'ADD_TODO':
      if (numberOfToDos.length <= 10) {
        return [
          ...state,
          {
            id: action.id,
            title: action.title,
            completed: false
          }
        ]
      } else {
        return [...state];
      }
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
        return state
  }
}

export default todos;
