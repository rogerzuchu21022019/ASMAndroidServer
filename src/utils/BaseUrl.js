
const BaseRouter = (subDirectory, endPoint) => {
  let baseUrl = `${subDirectory}${endPoint}`;
    return baseUrl
};

module.exports = BaseRouter