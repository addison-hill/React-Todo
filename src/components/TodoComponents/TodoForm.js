import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("look it works!");
        this.props.addItem(this.state.newItem);
        this.setState({ newItem: ''});
    };

    render() {
        console.log("rendering");
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item">New Item</label>    
                <input 
                    type="text"
                    name="item"
                    id="item"
                    value={this.state.newItem}
                    onChange={this.handleChanges} />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;