import React from "react";

export class Button extends React.Component {

    constructor(props: any){
        super(props);
    }

    handleClick = () => console.log('Clicked');

    render() {
        return <button onClick={this.handleClick}>Click Me!</button>;
    }
}