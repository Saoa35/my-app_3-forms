import React from "react";


class ControlledComponent extends React.Component {

    state = {
        value: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({
            value
        })
    }

    render() {

        return(
            <div>
                <h3>Controlled Component</h3>

                <form>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default ControlledComponent;