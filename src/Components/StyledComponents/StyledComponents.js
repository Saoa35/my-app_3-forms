import React from "react";
import styled from "styled-components";


const Section = styled.section`
        border: 1px solid black;
        padding: 15px;
        margin: 15px;
        color: blue;
        font-size: 110%;
    `;

    const Button = styled.button`
        display: inline-block;
        border-radius: 3px;
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
        width: 11rem;
        background: transparent;
        color: white;
        border: 2px solid white;
        cursor: pointer;
    `;


export default class StyledComponents extends React.Component {

    render() {

        return(
            <div>
                <Section>
                    Tips:event.preventDefault() and event.stopPropagation and event.stopImmediatePropagation

                    <Button>
                        Click me!
                    </Button>
                </Section>
            </div>
        )
    }
}