module.exports = (sequelize,DataTypes) =>{ 
    let alias = 'ImageProduct';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            allowNull:false
        },
        imageId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull:false
        },    
       
    }
    let config = {
        tableName:'imageProduct',
        timestamp: false 
    }
    //Asocio tabla brands con la tabla products
    const ImageProduct = sequelize.define(alias,cols,config)
    ImageProduct.associate = function(models){
        ImageProduct.belongsTo(models.Product,{
            as:'products',            
            foreignKey: 'productId',
            
        }),
        ImageProduct.belongsTo(models.Image,{
            as: 'images',
            foreignKey: 'imageId'
        })
    }
    return ImageProduct;
}