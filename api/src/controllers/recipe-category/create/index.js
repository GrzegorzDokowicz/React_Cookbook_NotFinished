import Action from "../../../../core/Action";
import CategoryModel from "../../../model/category";
import MysqlError from "../../../../core/MysqlError";

class CreateRecipeCategoryAction extends Action {
    render() {
        const requestData = {
            ...this.getRequestData(),
            type: CategoryModel.RECIPE_TYPE
        };
        const categoryModel = new CategoryModel(requestData);

        if (categoryModel.validate()) {
            categoryModel.create().then(() => {
                this.response.status(200).send();
            }).catch(error => {
                this.response.status(400).send(new MysqlError(MysqlError.CANNOT_CREATE_OBJECT, error));
            });

            return;
        }

        this.response.status(400).send(new MysqlError(MysqlError.VALIDATION_ERROR, categoryModel.validationErrors));
    }
}

export default CreateRecipeCategoryAction;
