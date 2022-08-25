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
            allowNull:false,
            unique: true
        },
        coverImage:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    }
    let config = {
        tableName:'images'
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