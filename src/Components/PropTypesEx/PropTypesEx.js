import React from 'react';
// import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';

class PropTypesEx extends React.Component {

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

PropTypesEx.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default PropTypesEx;