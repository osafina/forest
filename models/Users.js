const { name } = require('ejs');
const fs = require('fs');
const Sequelize = require('sequelize');
const path = require ('path');
const { all } = require('../routes/mainRoutes');

const User = {

generateId: function (){
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
// En caso de no tener usuarios el archivo JSON aún así lo escribe.
    if (lastUser){
    return lastUser.id + 1;
} else {
    return 1 }
}
,
findByField : function (field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find( oneUser => oneUser[field] === text);
    return userFound

},
create: function (userData){
    let allUsers = this.findAll();
    let newUser = {
        id: this.generateId(),
                ...userData
    }
    allUsers.push(newUser);
    return newUser
},
delete: function(id){
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(oneUser => oneUser !== id);
    allUsers.push(newUser);
    
    return finalUsers
}
}

module.exports = User;