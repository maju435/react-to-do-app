import todos from './todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        title: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        title: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos([
        {
          title: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_TODO',
        title: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        title: 'Run the tests',
        completed: false,
        id: 0
      }, {
        title: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      todos([
        {
          title: 'Run the tests',
          completed: false,
          id: 0
        }, {
          title: 'Use Redux',
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_TODO',
        title: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        title: 'Run the tests',
        completed: false,
        id: 0
      }, {
        title: 'Use Redux',
        completed: false,
        id: 1
      }, {
        title: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          title: 'Run the tests',
          completed: false,
          id: 1
        }, {
          title: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_TODO',
        id: 1
      })
    ).toEqual([
      {
        title: 'Run the tests',
        completed: true,
        id: 1
      }, {
        title: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})
