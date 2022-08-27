module.exports = (sequelize,DataTypes) =>{
    let alias = 'Type';
    let cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        
    }
    let config = {
        tableName: 'type',
        timestamp: false 
    }
    //Asocio tabla colors con la tabla products
    const Type = sequelize.define(alias,cols,config)
    
    Type.associate = function(models){
        Type.hasMany(models.Product,
            {
                as:'products',
                foreignKey:'typeId'
            }
            )        
        }
        return Type;
    }