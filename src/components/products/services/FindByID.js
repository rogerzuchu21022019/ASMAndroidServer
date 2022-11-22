
const ProductModel = require("../models/Product.Model");

const FindByIDService = async (productID) => {
  try {
    const query = { productID: productID };
    const product = await ProductModel.findOne(query);
    
    return product;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindByID.js ~ line 9 ~ FindByIDService ~ error handler",
      error.message
    );
  }

};

module.exports = FindByIDService;

