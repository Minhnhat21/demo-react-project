import React from "react";

class DisplayInfor extends React.Component {
    render() {

        //destructing array/object
        const { listUsers } = this.props;  // const listUsers = this.props.listUsers
        console.log(listUsers);
        return(
            <div>
                {
                    listUsers.map((user) => {
                        return (
                            <div key={user.id}>My name is {user.name}, I'm {user.age} year old.</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayInfor;