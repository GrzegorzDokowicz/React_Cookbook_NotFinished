import CreateAction from "../../../../core/actions/CreateAction";
import RecipeCommentsModel from "../../../model/recipe-comments";

class CreateRecipeCommentAction extends CreateAction {
    getConfiguration() {
        return {
            model: RecipeCommentsModel,
            data: {
                ...this.getRequestData()
            }
        }

    }
}

export default CreateRecipeCommentAction;
