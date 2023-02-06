import { render } from "@testing-library/react";
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfo from "./UserInfor";

class MyComponent extends React.Component{
    
    state = {
        listUsers: [
            {id: 1, name: 'Minh Nhat', age: 21},
            {id: 2, name: 'Minh Quang', age: 14},
            {id: 3, name: 'Quang Teo', age: 35}
        ]
    }

    render() {
        const myAddress = ['Hue','Viet Nam'];
        return(
            <div>
               <UserInfo/>
               <br/>
               <DisplayInfor listUsers = {this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent;