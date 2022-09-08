import React, { Component } from 'react'
import Header from './components/Header'
import SubmitForm from './components/SubmitForm'

export default class ToDoList extends Component {

    render() {

        return(
            <div>
                <h3>
                    <Header />
                </h3>
                <div>
                    <SubmitForm />
                </div>
            </div>
        )
    }
}