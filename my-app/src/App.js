import React, {Component} from 'react';
import NavigationBarContainer from './container/NavigationBarContainer'
import WelcomeContent from './components/WelcomeContent'
import ToDoEditorPage from './pages/ToDoEditorPage';
import AuthenticationContainer from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/container/AuthenticationContainer.js';
import RegistrationContainer from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/container/RegistrationContainer.js';


import {HashRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App
