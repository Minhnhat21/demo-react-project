import React from "react";

class DisplayInfor extends React.Component {
    render() {
        return(
            <div>
                My name is {this.props.name}, I'm {this.props.age} year old. {this.props.address}
            </div>
        )
    }
}

export default DisplayInfor;