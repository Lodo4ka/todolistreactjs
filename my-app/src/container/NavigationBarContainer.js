import React from 'react';
import NavigationBar from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/components/NavigationBar.js';
import {connect} from 'react-redux'
import {setIsAuthenticated} from "../store/user/UserActions";

export default class NavigationBarContainer extends React.Component {



    onClickLogOutOrIn = () => {
        if (this.props.isAuthenticated) {
            let action = setIsAuthenticated(false);
            this.props.dispatch(action);
            localStorage.removeItem("token");

            this.props.history.push("/");
        }
        else {
            this.props.history.push("/");
        }
    };

    render() {
        return (

            <NavigationBar
                isAuthenticated={this.props.isAuthenticated}
                onClickLogOut={this.onClickLogOutOrIn}/>
        )
    }
}

const mapStateToProps = (state) => {
    let props = {
        isAuthenticated: state.isAuthenticated
    }
    return props;
};


//function
let reduxContainerCreator = connect(mapStateToProps());
//React component
let ReduxNavigationBarContainer = reduxContainerCreator(NavigationBarContainer);

export default ReduxNavigationBarContainer;