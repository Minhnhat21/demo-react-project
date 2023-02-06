import { render } from "@testing-library/react";
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfo from "./UserInfor";

class MyComponent extends React.Component{
    
    render() {
        const myAddress = ['Hue','Viet Nam'];
        return(
            <div>
               <UserInfo/>
               <br/>
               <DisplayInfor name='Nhat' age={21}/>
               <DisplayInfor name='Quang' age={14} address = {myAddress}/>
            </div>
        )
    }
}

export default MyComponent;