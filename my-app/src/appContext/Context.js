import UserService from '/Users/lodo4ka/Desktop/Github/todolistreactjs/my-app/src/services/UserService.js';
import DateUtils from './../utils/DateUtils';

const startUrl = "http://localhost:8080/user";

const userService = new UserService(startUrl);

const dateUtils = new DateUtils();


export {userService, dateUtils};