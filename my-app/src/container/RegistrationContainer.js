import React from 'react';
import Registration from "../components/Registration";
import {userService} from './../appContext/Context';

class RegistrationContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };
    }

    onChangeLogin = (event) => {
        this.setState({login: event.target.value});
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    // onClickSignUp = () => {
    //     userService.create(this.state).then(() => {
    //         return userService.authentication(this.state);
    //     }).then((response) => {
    //         return response.text();
    //     }).then(token => {
    //         localStorage.setItem("token", token);
    //         this.props.dispatch(setIsAuthenticated(true));
    //         this.props.history.push("/tree");
    //     });
    // }

    render() {
        return(
            <Registration
                {...this.state}
                onChangeLogin={this.onChangeLogin}
                onChangePassword={this.onChangePassword}
                onClickSignUp={this.onClickSignUp}
            />
        );
    }
}
export default RegistrationContainer;