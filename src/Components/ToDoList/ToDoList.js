import React, { Component } from 'react'
import Header from './components/Header'
import SubmitForm from './components/SubmitForm'

export default class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(value) {
        console.log(value);
        // this.setState({

        // })
    }

    render() {

        return(
            <div>
                <h3>
                    <Header tasksCount={this.state.tasks.length}/>
                </h3>
                <div>
                    <SubmitForm onAddTodo={this.handleAddTodo}/>
                </div>
            </div>
        )
    }
}