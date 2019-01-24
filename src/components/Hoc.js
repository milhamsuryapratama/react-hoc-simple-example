import React, { Component } from 'react';

const Hoc = (WrappedComponent) => (props) => {
    return (
        <div>
            <WrappedComponent>
                {props.children.toUpperCase()}
            </WrappedComponent>
        </div>
    )
}

export default Hoc