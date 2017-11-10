import React, { Component } from 'react';
import NavigationBarContainer from './container/NavigationBarContainer'
import WelcomeContent from './components/WelcomeContent'
import ToDoEditorPage from './pages/ToDoEditorPage';
import AuthenticationContainer from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/container/AuthenticationContainer.js';
import RegistrationContainer from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/container/RegistrationContainer.js';
import {Provider} from 'react-redux';
import store from './store/Store'
import {HashRouter, Route} from 'react-router-dom';
import {setIsAuthenticated} from "./store/user/UserActions";


class App extends React.Component {

    constructor(props){
        super(props);
        let token = localStorage.getItem("token");
        let isAuthenticated;
        if(token){
            isAuthenticated = true;
        }
        else {
            isAuthenticated =false;
        }
        let action = setIsAuthenticated(isAuthenticated);
        store.dispatch(action);
    }

    render() {
        return (
            <Provider store ={store}>
            <HashRouter>
                <div>
                    <Route path="/" component={NavigationBarContainer}/>
                    <Route exact path="/" component={WelcomeContent}/>
                    <Route exact path="/registration" component={RegistrationContainer}/>
                    <Route exact path="/authentication" component={AuthenticationContainer}/>

                    <Route exact path="/todoEditor/new/:parentId?" component={ToDoEditorPage}/>
                    <Route exact path="/todoEditor/edit/:id" component={ToDoEditorPage}/>
                </div>
            </HashRouter>
            </Provider>
        );
    }
}

export default App
