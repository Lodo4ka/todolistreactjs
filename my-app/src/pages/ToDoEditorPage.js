import React from 'react';
import TodoEditorContainer from './../container/TodoEditorContainer';

export default class ToDoEditorPage extends React.Component {

    getMode(){
        if(this.props.match.path === "/todoEditor/edit/:id"){
            return "edit";
        }

        if(this.props.match.path ==="/todoEditor/new/:parentId?"){
            return "new";
        }

        throw new Error("Unknow url!");
    }

    render(){
        console.log(this.props);
        return(
          <TodoEditorContainer
              history={this.props.history}
              mode={this.getMode()} id={this.props.match.id}
          parentId={this.props.match.parentID}/>
        );
    }
}