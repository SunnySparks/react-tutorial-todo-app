import React from "react"

function TodoItem(props) {
    return<li>
    <input
        type="checkbox"
        checked={this.props.todo.completed}
        onChange={() => console.log("clicked")}
    /> {this.props.todo.title}
    </li>
}

export default TodoItem