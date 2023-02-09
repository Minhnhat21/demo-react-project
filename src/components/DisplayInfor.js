import React, { useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {
    
//     state = {
//         isShowListUser: true
//     }
//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }
//     render() {

//         //destructing array/object
//         const { listUsers } = this.props;  // const listUsers = this.props.listUsers
//         console.log(listUsers);

//         return(
//             <div className="display-user-controller">
//                 <img src={logo}/>
//                 <div>
//                     <span onClick={() => this.handleShowHide()}>
//                         {this.state.isShowListUser ? "Hide " : "Show "} list users: 
//                     </span>
//                 </div>
//                 {this.state.isShowListUser && 
//                     <div>
//                         {
//                             listUsers.map((user) => {
//                                 return (   
//                                     <>
//                                     <div key={user.id} className={user.age >= 18 ? 'green': 'red'}>
//                                         My name is {user.name}, I'm {user.age} year old.
//                                     </div>
//                                     <button onClick={() => this.props.handleDeleteUserInfo(user.id)} >Delete</button>
//                                     <hr></hr>
//                                     </>           
//                                 )
//                             })
//                         }
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    //destructing array/object
    const { listUsers } = props;

    //destructing assigment
    const [isShowListUser, setIsShowListUser] = useState(true);
    
    const handleShowHide = () => {
        setIsShowListUser(!isShowListUser)
    }
    return(
        <div className="display-user-controller">
            
            <div>
                <span onClick={() => handleShowHide()}>
                    {isShowListUser ? "Hide " : "Show "} list users: 
                </span>
            </div>
            {isShowListUser && 
                <>
                    {
                        listUsers.map((user) => {
                            return (   
                                <>
                                <div key={user.id} className={user.age >= 18 ? 'green': 'red'}>
                                    My name is {user.name}, I'm {user.age} year old.
                                </div>
                                <button onClick={() => props.handleDeleteUserInfo(user.id)} >Delete</button>
                                <hr></hr>
                                </>           
                            )
                        })
                    }
                </>
            }
        </div>
    )
}
export default DisplayInfor;