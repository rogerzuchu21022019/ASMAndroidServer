import addCommentService from "../services/AddComment";

const AddCommentController = async (id, comment) => {
  try {
    const data = await addCommentService(id, comment);
    return data;
  } catch (error) {
    console.log(`Error handler AddCommentController: `, error);
  }
};
export default AddCommentController;
