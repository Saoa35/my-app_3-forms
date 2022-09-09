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
        this.setState({
            // tasks: [...this.state.tasks, value]
            tasks: this.state.tasks.concat(value)
        })
    }

    handleDeleteTodo(id) {
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        })
    }

    render() {

        console.log(this.state.tasks);

        return(
            <div>
                <Header tasksCount={this.state.tasks.length}/>          
                <SubmitForm onAddTodo={this.handleAddTodo}/>
                <List list={this.state.tasks} onDelete={this.handleDeleteTodo}/>
            </div>
        )
    }
}