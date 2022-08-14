module.exports = function (sequelize, dataTypes){
   
    let alias = 'Products'
   
  //Aclaramos columnas que vamos a leer y escribir de la BD.  
  //Al menos se tiene que aclarar el tipo de dato.
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DOUBLE
        },
        description: {
            type: dataTypes.STRING
        },
    }
        
    let config = {
        tableName: 'Products',
        timestamps: false,
    }
    
    let Products = sequelize.define(alias, cols, config);
    
    return Products;
        
}