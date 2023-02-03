import { render } from "@testing-library/react";
import React from "react";

class MyComponent extends React.Component{
    state = {
        name: 'Minh Nhat',
        address: 'Thành Phố Huế',
        age: 21
    }
    handleClick() {
        console.log('Xin chao');
    }

    handleOnMouseOver(event) {
        console.log(event);
    }
    render() {
        return(
            <div>
                Hello, I'm{this.state.name}, {this.state.age} year old. 
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>OnMouseOver</button>
            </div>
        )
    }
}

export default MyComponent;