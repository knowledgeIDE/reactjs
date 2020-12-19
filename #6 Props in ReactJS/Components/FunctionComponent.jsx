import React from 'react';

const SampleFunction = (props) => {
    return(
    <div>
        <div>My name is {props.name}</div>
        <div>My age is {props.age}</div>
        {props.children}
    </div>
    );
}

export default SampleFunction;