export default class UserService{
    constructor(startUrl){
        this.startUrl = startUrl;
    }

    userController(user){
        return fetch( this.startUrl + "/user", {
           method: "post",
           body: JSON.stringify(user)
        });
    }

    create(user){
        return fetch(this.startUrl +"user", {
            method: "post",
            headers: new Headers({
                "Content-type": "application/json;charset=UTF-8"
            }),
            body: JSON.stringify(user)
        });
    }

    authentication(user){
        return fetch(this.startUrl + "authentication",{
            method: "post",
            headers: new Headers({
                "Content-type": "application/json;charset=UTF-8"
            }),
            body: JSON.stringify(user)
        });
    }
}

