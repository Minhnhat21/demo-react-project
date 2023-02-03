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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name)
        // this.setState({
        //     name: event.target.value
        // })
    }
    render() {
        return(
            <div>
                Hello, I'm {this.state.name}, {this.state.age} year old. 
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input
                        type = 'text'
                        onChange={(event) => {this.handleOnChangeInput(event)}}
                    />
                    <button>Sunmit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;