import React, { Component } from 'react';
import { connect } from "react-redux";
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { fetchToDoListRequest } from '../actions';

class App extends Component {

  componentDidMount() {
    // fetchToDoListRequest();
    // this.props.dispatch(fetchToDoListRequest())
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <button onClick={() => this.props.dispatch(fetchToDoListRequest())}>Fetch next TODO</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(App);
