import React from 'react';
import TodoEditor from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/components/TodoEditor.js';
import {dateUtils} from './../appContext/Context';

export default class TodoEditorContainer extends React.Component{


    constructor(props) {
        super(props);



        this.state = {
            name: "",
            comment: "",
            startDate: dateUtils.formatToHtmlDateInput(new Date()),
            endDate: dateUtils.formatToHtmlDateInput(new Date()),
            tags: "",
            priority: "medium",
            important: false,
            weight: 1
        };
    }

    onChangeName = (event) => {
        this.setState({
           name: event.target.value
        });
    }

    onChangeComment = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    onChangeStartDate = (event) => {
        this.setState({
            startDate: event.target.value
        });
    }

    onChangeEndDate = (event) => {
        this.setState({
            endDate: event.target.value
        });
    }

    onChangeTags = (event) => {
        this.setState({
            tags: event.target.value
        });
    }

    onChangePriority = (event) => {
        this.setState({
            priority: event.target.value
        });
    }

    onChangeImportant = (event) => {
        this.setState({
            important: event.target.value
        });
    }

    onChangeWeight = (event) =>{
        this.setState({
            comment: event.target.value
        });
    }

    onClickSave = (event) => {

    }

    getFormattedTodoToService(){
        let todo = {
            name: this.state.name,
            comment: this.state.comment,
            dateFrom: dateUtils.formatToDate(this.state.dateFrom),
            
        }
    }

    render(){
        return(
            <TodoEditor
                name={this.state.name}
                onChanename={this.state.onChangeName}
                onChangeComment={this.state.onChangeComment}
                onChangeStartDate={this.state.onChangeStartDate}
                onChangeEndDate={this.onChangeEndDate}
                onChangeTags={this.state.onChangeTags}
                onChangePriority={this.state.onChangePriority}
                onChangeImportant={this.state.onChangeImportant}
                onChangeWeight={this.state.onChangeWeight}
                onClickSave={this.state.onClickSave}
            />
        );
    }
}