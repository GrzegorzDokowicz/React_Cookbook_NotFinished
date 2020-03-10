import Action from "../../../../core/Action";
import RecipeCommentsModel from "../../../model/recipe-comments";
import MysqlError from "../../../../core/MysqlError";

class GetAllRecipeCommentsAction extends Action {
    render() {
        const model = new RecipeCommentsModel();

        model.getBy("recipe_id", id, false).then(response => {
            this.response.status(200).send(response);
        }).catch(error => {
            this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, error));
        });
    }
}

export default GetAllRecipeCommentsAction;
