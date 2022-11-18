module.exports = {
  addNews: require(`../api/news/AddNews`),
  newsList: require(`../api/news/FindNewsList`),
  newsDetail: require(`../api/news/FindNewsDetail`),
  deleteNews: require(`../api/news/DeleteNews`),
  searchNews: require(`../api/news/SearchNews`),
  media: require(`../api/media/Upload`),

  insertCategory: require(`./category/AddCategory`),
  categories: require(`../api/category/FindCategories`),
};