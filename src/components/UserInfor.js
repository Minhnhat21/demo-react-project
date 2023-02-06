import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Minh Nhat',
        address: 'Thành Phố Huế',
        age: 21
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeInputAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name)
    }

    render() {
        return(
            <div>
                 Hello, I'm {this.state.name}, {this.state.age} year old. 
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input
                        value={this.state.name}
                        type = 'text'
                        onChange={(event) => {this.handleOnChangeInput(event)}}
                    />
                    <input
                        value={this.state.age}
                        type = 'number'
                        onChange={(event) => {this.handleOnChangeInputAge(event)}}
                    />
                    <button>Sunmit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo