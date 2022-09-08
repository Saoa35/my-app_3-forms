import React, { Component } from 'react'

export default class List extends Component {

    render() {

        return(
            <ul>
                {this.props.list.map(item => {
                    return (
                        <li>
                            {item.value}
                        </li>
                    )
                })}
            </ul>
        )
    }
}