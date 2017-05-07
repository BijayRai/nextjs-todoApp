import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class TodoList extends React.Component {

  componentDidMount () {
    
  }

  render () {

    const {todos} = this.props;

    return (
      <div>
        <ul>
            {todos.map(todo => <li key={todo.text}>{todo.text}</li>)}
        </ul>
      </div>

    )
  }
}

const mapStateToProps = ({todos}) => ({todos})

export default connect(mapStateToProps)(TodoList)