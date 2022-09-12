module.exports = (sequelize, DataTypes)=>{
    //Definimos cómo va a llamar sequelize a la tabla.
    let alias = "User"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING ,
        },
        adress:{
            type:DataTypes.STRING, 
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type: DataTypes.STRING,
        },
        image: DataTypes.STRING,
        profile: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.JSON
        },
        updatedAt: {
            type: DataTypes.JSON
        }
    }
    let config= {
      tableName:"user" ,
       timestamp: false 
   }
 
    let User= sequelize.define(alias, cols, config);
    
    User.associate=function(models){
                                    //Utilizo el alias que difinimos en el primer objeto del modelo.
        User.belongsToMany(models.Product,{
            as:"product",
            through:"cartProduct",
            foreingKey:"userId",
            otherKey:"productId"
        })  
    }

    return User;
}
