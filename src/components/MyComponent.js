import { render } from "@testing-library/react";
import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfo from "./AddUserInfor";

class MyComponent extends React.Component{
    
    state = {
        listUsers: [
            {id: 1, name: 'Minh Nhat', age: 21},
            {id: 2, name: 'Minh Quang', age: 14},
            {id: 3, name: 'Quang Teo', age: 35}
        ]
    }
    handelAddUserInfo = (objectUser) => {
        this.setState({
            listUsers: [objectUser, ...this.state.listUsers]
            // listUsers: [...this.state.listUsers, objectUser]
        })
    }
    handleDeleteUserInfo = (userId) => {
        let listUserInfoClone = [...this.state.listUsers];
        listUserInfoClone = listUserInfoClone.filter(user => user.id != userId);
        this.setState({
            listUsers: listUserInfoClone
        })
    }
    render() {
        const myAddress = ['Hue','Viet Nam'];
        return(
            <>
            <h1>Welcome</h1>
            <div>
               <AddUserInfo
                    handelAddUserInfo = {this.handelAddUserInfo}
               />
               <br/>
               <DisplayInfor listUsers = {this.state.listUsers} handleDeleteUserInfo = {this.handleDeleteUserInfo}/>
            </div>
            </>
        )
    }
}

export default MyComponent;