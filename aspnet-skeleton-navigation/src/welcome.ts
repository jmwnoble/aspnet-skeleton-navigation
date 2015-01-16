import _aureliaHttpClient = require('aurelia-http-client');
//import _aureliaRouter = require('aurelia-router');
var httpClient = _aureliaHttpClient.HttpClient;
//var router = _aureliaRouter.Router;

export class Welcome {
    public heading: string;
    public firstName: string;
    public lastName: string;
    //public router : _aureliaRouter.Router;

    constructor() {
        this.heading = 'Welcome to the Aurelia Navigation App (using Visual Studio and Typescript)!';
        this.firstName = 'John';
        this.lastName = 'Doe';
        //this.router = new router();

    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    welcome() {
        alert("Welcome, " + this.fullName + "!");
    }
}