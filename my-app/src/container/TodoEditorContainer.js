import React from 'react';
import TodoEditor from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/components/TodoEditor.js';
import {dateUtils} from './../appContext/Context';
import {todoService} from "./../appContext/Context";

export default class TodoEditorContainer extends React.Component{


    constructor(props) {
        super(props);



        this.state = {
            parentID: this.props.parentID,
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

    todo = {
        "id": this.props.id,
        "parentId": 2,
        "name": "Edit Todo",
        "comment": "Comment",
        "tags":[
            {
            "id":3,
                "name": "Super tag",
                "todoIds": [2, this.props.id.i]
            }
    ]
    }

    componentDidMount() {
        if (this.props.mode == "edit") {
            //     todoService.get(this.props.id).then((json)=>{
            //
            //     });
            // }

            setTimeout(500,() =>{
                let result = Object.assign({}, this.todo,{
                    startDate: dateUtils.formatToHtmlDateInput(new Date(this.todo.startDate)),
                    endDate: dateUtils.formatToHtmlDateInput(new Date(this.todo.endDate)),
                    tags: this.todo.tags.map(tag => (tag.name)).join(",")
                });

                this.setState(result);
            });
        }
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

        onChangeWeight = (event) => {
            this.setState({
                comment: event.target.value
            });
        }


        getFormattedTodoToService = function () {
            let todo = {
                name: this.state.name,
                comment: this.state.comment,
                startDate: dateUtils.formatToDate(this.state.startDate),
                endDate: dateUtils.formatToDate(this.state.endDate),
                tags: this.state.tags.split(",").map(tag => {
                    name: tag.trim()
                }),
                priority: this.state.priority,
                important: this.state.important,
                weight: this.state.weight

            };
        }
        onClickSave = (event) => {
            let todo = this.getFormattedTodoToService();
            if(this.props.mode === "new"){
                todoService.create(todo).then(() =>{
                    this.props.history.goBack();
                });
            }
            if(this.props.mode === "edit"){
                setTimeout( this.props.history.goBack(), 500);
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