import React from "react";

class Student extends React.Component {

    render() {
        console.log(this.props) //its an object having props name="Alexa"
        return(
            //first we see how the alexa is coming to child component
            <>
            {/* We can to use Props and make it Dynamic instead of Hello Alexa */}
            <h1> Hello {this.props.stuname}!</h1>
            </>
        )
    }
}

export default Student;

/*

Props are similar to Arguments in functions.
When passing props it should always be from parents to child.

We can pass anything as a Props

In case if we forget to pass any value to property
We can use this defaultProps

Student.defaultProps = {
    stuanem: "Student",
    marks: "N.A."
}


Props in Function Component
As we dont have the this in function we directly give the props in functions

function Student(props) {
    const {stuname, marks} = props;
    return(
        <>
            <h1> Hello {stuname} </h1>
            <p> You have secured {marks} % </p>
            <hr/>
        </>
    )
}

Just we need to pass the Props while calling the functional Component
Props you can not modify.


*/

