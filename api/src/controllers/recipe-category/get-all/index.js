import Action from "../../../../core/Action";
import CategoryModel from "../../../model/category";
import MysqlError from "../../../../core/MysqlError";

class GetAllRecipeCategoryAction extends Action {
    render() {
        const model = new CategoryModel();

        model.getBy("type", CategoryModel.RECIPE_TYPE, false).then(response => {
            this.response.status(200).send(response);
        }).catch(error => {
            this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, error));
        });
    }
}

export default GetAllRecipeCategoryAction;
