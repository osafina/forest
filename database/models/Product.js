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
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false, 
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        typeId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    }
    let config= {
       tableName:"products"  
   }
 
    let Product= sequelize.define(alias, cols, config)

    Product.associate=function(models){
        Product.belongsTo(models.Type,{
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
    }
return Product;
}

