import addNewsService from "../services/AddNewsToCategory";

const AddNewsController = async (news, categoryID) => {
  try {
    const newsData = await addNewsService(news, categoryID);
    return newsData;
  } catch (error) {
    console.log(`Error in AddNewsController: ${error}`);
  }
};
export default AddNewsController;
