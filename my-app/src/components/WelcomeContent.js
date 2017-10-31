import React from 'react';

export default class WelcomeContent extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1>Welcome!</h1>
                        <p>
                            Here is form for Registration
                            <br/>
                            <a href="#/registration">Sign up</a><br/>
                            <a href="#/authentication">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>

        );
    }


}