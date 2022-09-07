import React from "react";
import { Button, Section } from "../ControlledComponent/styles";

export default class StyledComponents extends React.Component {

    state = {
        clicked: false
    }

    render() {

        return(
            <div>
                <Section >
                    Tips:event.preventDefault() and event.stopPropagation and event.stopImmediatePropagation

                    <Button 
                        onClick={() => this.setState({clicked: !this.state.clicked})}
                        primary={this.state.clicked}
                        >
                        
                        Click me!
                    </Button>
                </Section>
            </div>
        )
    }
}