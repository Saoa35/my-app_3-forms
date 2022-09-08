import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import SubmitForm from './components/SubmitForm';

export default class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleAddTodo(value) {
        // console.log(value);
        this.setState({
            // tasks: [...this.state.tasks, value]
            tasks: this.state.tasks.concat(value)
        })
    }

    handleDeleteTodo(id) {
        console.log(id);
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        })
    }

    render() {

        console.log(this.state.tasks);

        return(
            <div>
                <h3>
                    <Header tasksCount={this.state.tasks.length}/>
                </h3>
                <div>
                    <SubmitForm onAddTodo={this.handleAddTodo}/>
                    <List list={this.state.tasks} onDelete={this.handleDeleteTodo}/>
                </div>
            </div>
        )
    }
}