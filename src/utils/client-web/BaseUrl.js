
const BaseRouter = (subDirectory, endPoint) => {
  let baseUrl = `${subDirectory}${endPoint}`;
    return  (req,res,next) => {
     next(baseUrl)
    }
};


module.exports = BaseRouter