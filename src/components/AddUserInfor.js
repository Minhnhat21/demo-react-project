import React, { useState } from "react";

// class AddUserInfo extends React.Component {

//     state = {
//         name: 'Minh Nhat',
//         address: 'Thành Phố Huế',
//         age: 21
//     }

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeInputAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state.name)

//         this.props.handelAddUserInfo({
//             id: Math.floor((Math.random()*100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }

//     render() {
//         return(
//             <div>
//                  Hello, I'm {this.state.name}, {this.state.age} year old. 
//                 <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
//                     <input
//                         value={this.state.name}
//                         type = 'text'
//                         onChange={(event) => {this.handleOnChangeInput(event)}}
//                     />
//                     <input
//                         value={this.state.age}
//                         type = 'number'
//                         onChange={(event) => {this.handleOnChangeInputAge(event)}}
//                     />
//                     <button>Sunmit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    
    // const [userInfor, setUserInfo] = useState({
    //                                     name: 'Minh Nhat',
    //                                     address: 'Thành Phố Huế',
    //                                     age: 21
    //                                 })
    const [name,setName] = useState("Minh Nhat");
    const [age, setAge] = useState(21);
    const [address, setAddress] = useState("47 Nguyen Phuc Chu")
    const handleOnChangeInput = (event) => {
        // setUserInfo(userInfor => {
        //     return {...userInfor, name: event.target.value}
        // })
        setName(event.target.value)
    }
    const handleOnChangeInputAge = (event) => {
        // setUserInfo(userInfor => {
        //     return {...userInfor, age: event.target.value}
        // })
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handelAddUserInfo({
            id: Math.floor((Math.random()*100) + 1) + '-random',
            name: name,
            age: age
        })        
    }
    return(
        <div>
                Hello, I'm {name}, {age} year old. 
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <input
                    value={name}
                    type = 'text'
                    onChange={(event) => handleOnChangeInput(event)}
                />
                <input
                    value={age}
                    type = 'number'
                    onChange={(event) => handleOnChangeInputAge(event)}
                />
                <button>Sunmit</button>
            </form>
        </div>
    )
}

export default AddUserInfo