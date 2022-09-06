import React from 'react';

class PropTypes extends React.Component {

    render() {

        return(
            <div>
                <h3>PropTypes</h3>
                <p>
                    {this.props.name} - {this.props.age}
                </p>
            </div>
        )
    }
}

export default PropTypes;