const { name } = require('ejs');
const fs = require('fs');
const path = require ('path');
const { all } = require('../routes/mainRoutes');

const User = {

fileName : 

        path.join(__dirname,'../data/usuariosDataBase.json'),

getData : function (){

        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
},

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

findAll : function (){

        return this.getData();
},

findByPk :  function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find( oneUser => oneUser.id === id);
        return userFound

},
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
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
    return newUser
},
delete: function(id){
    let allUsers = this.findAll();
    let finalUsers = allUsers.filter(oneUser => oneUser !== id);
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '))
    return finalUsers
}
}

module.exports = User;