import React, { Component } from 'react';

class SampleClass extends Component {

    render(){
        return(

            <div>
                <div>My name is {this.props.name}</div>
                <div>My age is {this.props.age}</div>
                {this.props.children}
            </div>

        );
    }

}

export default SampleClass;