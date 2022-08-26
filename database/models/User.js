module.exports = (sequelize, DataTypes)=>{
    
    let alias = "User"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        adress:{
            type:DataTypes.STRING, 
            
        },
        telephone:{
            type:DataTypes.STRING,
         
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        image: DataTypes.STRING,
        profile: DataTypes.INTEGER,

    }
    let config= {
       tableName:"users" ,
       timestamp: false 
   }
 
    let User= sequelize.define(alias, cols, config);
    
    User.associate=function(models){

        User.belongsToMany(models.Product,{
            as:"product",
            through:"cartProduct",
            foreingKey:"userId",
            otherKey:"productId"
        })  
    }

    return User;
}
