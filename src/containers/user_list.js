import React, {Component} from 'react'
import {connect} from 'react-redux'
    
    class UserList extends Component {
        render () {
            return (
                <div>
                    <ul className="col-md-4">
                        {
                            this.props.myUsers.map((user) => {
                                return (
                                    <li className="list-group-item" key={user.id}>
                                        {user.name}
                                    </li>
                                )
                            })
                        }
                    </ul> 
                </div>
            )
        }
    }
    
    function mapStateToPtops (state) {
        return {
            myUsers : state.users
        }
    }


export default connect(mapStateToPtops)(UserList)