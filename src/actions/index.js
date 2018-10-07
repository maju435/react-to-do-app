let nextTodoId = 100

export const addTodo = title => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const fetchToDoListSuccess = (todos) => {
  return { type: 'TODO_FETCH_SUCCEEDED', payload: todos }
};

export const fetchToDoListError = () => {
  return { type: 'TODO_FETCH_FAILED' }
};

export const fetchToDoListRequest = () => {
  return { type: 'TODO_FETCH' }
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
