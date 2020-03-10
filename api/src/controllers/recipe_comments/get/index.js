import Action from "../../../../core/Action";
import RecipeCommentsModel from "../../../model/recipe-comments";
import MysqlError from "../../../../core/MysqlError";

class GetRecipeCommentsAction extends Action {
    render() {
        const model = new RecipeCommentsModel();
        const {id} = this.getRequestData();

        if (id) {

            model.getSingleBy("id", id).then(response => {
                this.response.status(200).send(response);
            }).catch(error => {
                this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, error));
            });

            return;
        }

        this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, {
            message: 'Id isn\'t defined.'
        }));
    }
}

export default GetRecipeCommentsAction;
