import React from "react";


class ControlledComponent extends React.Component {

    state = {
        value: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({
            value
        })
    }

    handleSubmit() {
        console.log(this.state.value);
    }

    render() {

        return(
            <div>
                <h3>Controlled Component</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />

                    <button>
                        Click me!
                    </button>
                </form>
            </div>
        )
    }
}

export default ControlledComponent;