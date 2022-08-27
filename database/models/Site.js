 module.exports = (sequelize,DataTypes) =>{
    let alias = 'Site';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull:false
        },

    }
    let config = {
        tableName: 'site',
        timestamp: false 
    }
    //Asocio tabla brands con la tabla products
    const Site = sequelize.define(alias,cols,config)
    Site.associate = function(models){
        Site.hasMany(models.Product,
             {
                 as:'products',
                 foreignKey:'siteId'
             }
        )        
     }
     return Site;
 }