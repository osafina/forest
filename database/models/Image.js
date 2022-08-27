 module.exports = (sequelize, DataTypes)=>{
    let alias = 'Image';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING(500),
            allowNull:false
        },
    }
    let config = {
        tableName:'image',
        timestamp: false 
    };
    const Image = sequelize.define(alias,cols,config)
    Image.associate = function(models){
        Image.belongsToMany(models.Product,{
            as:'products',
            through:'imageProduct',
            foreignKey: 'imageId',
            otherKey:'productId'
        })
    }
    
    return Image;
    
}