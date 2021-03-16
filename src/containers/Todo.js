import React from 'react';
import { toggleCompleted } from '../actions';
import { connect } from 'react-redux';

const ToDo = ({ id, text, completed, toggleCompleted }) => {
  return (
    <li
      className={completed ? 'completed' : 'not-completed'}
      onClick={() => toggleCompleted(id)}
    >
    {text}
  </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCompleted: id => dispatch( toggleCompleted(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);
