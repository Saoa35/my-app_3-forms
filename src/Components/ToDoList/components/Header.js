import React, { Component } from 'react'

export default class Header extends Component {

    render() {

        return(
            <header>
                <h3>You have {this.props.tasksCount} todos!</h3>
            </header>
        )
    }
}