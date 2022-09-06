import React from 'react';

class PropTypes extends React.Component {

    render() {

        return(
            <div>
                <h3>PropTypes</h3>
                <p>
                   <b>{this.props.name} - {this.props.age}</b> 
                </p>
            </div>
        )
    }
}

export default PropTypes;