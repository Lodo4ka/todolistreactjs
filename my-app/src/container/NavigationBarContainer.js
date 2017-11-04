import React from 'react';
import NavigationBar from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/components/NavigationBar.js';

export default class NavigationBarContainer extends React.Component {

    constructor(props){
        super(props);
        let token = localStorage.getItem("token");
        this.state = {
            isAuthenticated: Boolean(token)
        }
    }

    isAuthenticated;
    onClickLogOutOrIn = () =>{
        if(this.state.isAuthenticated){
            localStorage.removeItem("token");
            this.setState({
                isAuthenticated: false
            });
        }
        else {
            this.props.history.push("/");
        }
    };

    render(){
        return(

            <NavigationBar
                isAuthenticated={this.state.isAuthenticated}
            onClickLogOut={this.onClickLogOutOrIn}/>
        )
    }
}