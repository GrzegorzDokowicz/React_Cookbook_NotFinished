import CreateAction from "../../../../core/actions/CreateAction";
import CategoryModel from "../../../model/category";

class CreateRecipeCategoryAction extends CreateAction {
    getConfiguration() {
        return {
            model: CategoryModel,
            data: {
                ...this.getRequestData(),
                type: CategoryModel.RECIPE_TYPE
            }
        }
    }
}

export default CreateRecipeCategoryAction;
