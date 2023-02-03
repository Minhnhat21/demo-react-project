import { render } from "@testing-library/react";
import React from "react";

class MyComponent extends React.Component{
    state = {
        name: 'Minh Nhat',
        address: 'Thành Phố Huế',
        age: 21
    }
    handleClick(event) {
        console.log('Xin chao');
        
        //merge state => react class
        this.setState({
            name: 'Minh Quang',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMouseOver(event) {
        // console.log(event.clientX);
    }
    render() {
        return(
            <div>
                Hello, I'm {this.state.name}, {this.state.age} year old. 
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>OnMouseOver</button>
            </div>
        )
    }
}

export default MyComponent;