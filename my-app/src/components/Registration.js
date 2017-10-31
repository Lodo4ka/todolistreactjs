import React from 'react';
import {userService} from "../appContext/Context";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        };
    }

    onClickSignUp = () =>{
        userService.userController(this.user);
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value});
    }

    onChangePassword = (event) =>{
        this.setState({password: event.target.value});
    }

    render(){
        return(
            <div className="container" style={{marginTop: "20px"}}>
                <div className="row justify-content-center">
                    <div className="col-4">

                        <div className="form-group row">
                            <label className="col-3 col-form-label">Login</label>
                            <div className="col-9">

                                <input className="form-control" type="text" onChange={this.onChangeName}
                                       value={this.state.name}/>

                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-3 col-form-label">Password</label>
                            <div className="col-9">

                                <input className="form-control" type="password" onChange={this.onChangePassword}
                                       value={this.state.password}/>

                            </div>
                        </div>

                        <div style={{float: 'right'}}>

                            <button type="button" className="btn" onClick={this.onClickSignUp}>Sign up</button>

                        </div>

                    </div>
                </div>
            </div>
                );
    }
}

