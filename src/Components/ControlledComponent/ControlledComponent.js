import React from "react";


class ControlledComponent extends React.Component {

    state = {
        input: '',
        textArea: '',
        select: 'opt2',
        checkbox: false
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChangeTA = this.handleChangeTA.bind(this);
        // this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    // handleChangeTA(e) {
    //     const textArea = e.target.value;

    //     this.setState({
    //         textArea
    //     })
    // }

    // handleChangeSelect(e) {
    //     const select = e.target.value;

    //     this.setState({
    //         select
    //     })
    // }

    render() {

        return(
            <div>
                <h3>Controlled Component</h3>

                <form onSubmit={this.handleSubmit}>

                    <input type='text' name='input' value={this.state.input} onChange={this.handleChange} />

                    <textarea value={this.state.textArea} name='textArea' onChange={this.handleChange} />

                    <input type='checkbox' name='checkbox' value={this.state.checkbox} onChange={this.handleChange} />

                    <select value={this.state.select} name='select' onChange={this.handleChange}>
                        <option value='opt1'>Option 1</option>
                        <option value='opt2'>Option 2</option>
                        <option value='opt3'>Option 3</option>
                        <option value='opt4'>Option 4</option>
                    </select>

                    <button>
                        Click me!
                    </button>
                </form>
            </div>
        )
    }
}

export default ControlledComponent;