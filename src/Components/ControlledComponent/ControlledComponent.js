import React from "react";


class ControlledComponent extends React.Component {

    state = {
        value: '',
        textArea: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTA = this.handleChangeTA.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;

        this.setState({
            value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value);
    }

    handleChangeTA(e) {
        const textArea = e.target.value;

        this.setState({
            textArea
        })
    }

    render() {

        return(
            <div>
                <h3>Controlled Component</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />

                    <textarea value={this.state.textArea} onChange={this.handleChangeTA} />

                    <button>
                        Click me!
                    </button>
                </form>
            </div>
        )
    }
}

export default ControlledComponent;