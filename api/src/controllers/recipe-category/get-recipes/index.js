import Action from "../../../../core/Action";
import MysqlError from "../../../../core/MysqlError";
import RecipeCategories from "../../../model/recipes-categories";

class GetRecipesFromCategoryAction extends Action {
    render() {
        const model = new RecipeCategories();

        this.getId().then(id => model.getBy("category_id", id, false))
            .then(response => {
                this.response.status(200).send(response);
            })
            .catch(error => {
                this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, error.message));
            });
    }
}

export default GetRecipesFromCategoryAction;
