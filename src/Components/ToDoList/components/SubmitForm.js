import React, { Component } from 'react'

export default class SubmitForm extends Component {

    render() {

        return(
            <form>
                <input type='text'/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}