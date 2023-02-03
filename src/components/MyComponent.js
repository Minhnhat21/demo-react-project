import { render } from "@testing-library/react";
import React from "react";

class MyComponent extends React.Component{
    state = {
        name: 'Minh Nhat',
        address: 'Thành Phố Huế',
        age: 21
    }
    render() {
        return(
            <div>
                Hello, I'm{this.state.name}, {this.state.age} year old. 
            </div>
        )
    }
}

export default MyComponent;