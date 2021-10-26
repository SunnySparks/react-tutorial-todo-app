import React, { Component } from "react";

class InputTodo extends Component {
    state = {
        title: "",
        fName: "",
        lastName: "",
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        return (
        <form>
            <input
                type="text"
                placeholder="Add Todo..."
                value={this.state.title}
                name="title"
                onChange={this.onChange}
            />
            <button>Submit</button>
        </form>
        )
    }
}
export default InputTodo;