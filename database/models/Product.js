module.exports = (sequelize, DataTypes)=>{
let alias = "Product"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
          
                },
        price:{
            type: DataTypes.INTEGER,
           
        },
        description:{
            type: DataTypes.STRING,
          
            
        },
        stock:
            {
            type:DataTypes.INTEGER,
           
        },
        imagen: {
            type: DataTypes.STRING,
           
        },
        updatedAt: 
            {     
            type:DataTypes.JSON
        },   
    }
    let config= {
       tableName:"product",
       timestamp: false   
   }
 
    let Product= sequelize.define(alias, cols, config)

   /* Product.associate=function(models){
        Product.belongsTo(models.Type,{
            //definimos como llamamos esa relación. Buena práctica en minuscula y plural.
            as:"type",
            foreingKey:"typeId"
        })
        Product.belongsTo(models.Site,{
            as:"site",
            foreingKey:"sitedId"
        })  
        Product.belongsToMany(models.Image,{
            as:"image",
            through:"imageProduct",
            foreingKey:"productId",
            otherKey:"imageId"
        })
        Product.belongsToMany(models.User,{
            as:"user",
            through:"cartProduct",
            foreingKey:"productId",
            otherKey:"userId"
        })      
    }*/
return Product;
}

