export default class TodoService{
    constructor(startUrl){
        this.startUrl = startUrl;
    }

    create(todo){
        return fetch(this.startUrl +"todo", {
            method: "post",
            headers: new Headers({
                "Content-type": "application/json;charset=UTF-8",
                "token": localStorage.getItem("token")
            }),
            body: JSON.stringify(todo)
            });

    }
}