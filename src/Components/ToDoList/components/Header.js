import React, { Component } from 'react'

export default class Header extends Component {

    render() {

        return(
            <header>
                You have {this.props.tasksCount} todos!
            </header>
        )
    }
}