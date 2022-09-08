import React, { Component } from 'react'
import Header from './components/Header'
import SubmitForm from './components/SubmitForm'

export default class ToDoList extends Component {

    state = {
        tasks: [],
    }

    render() {

        return(
            <div>
                <h3>
                    <Header tasksCount={this.state.tasks.length}/>
                </h3>
                <div>
                    <SubmitForm />
                </div>
            </div>
        )
    }
}