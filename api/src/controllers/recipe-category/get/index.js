import Action from "../../../../core/Action";
import CategoryModel from "../../../model/category";
import MysqlError from "../../../../core/MysqlError";

class GetRecipeCategoryAction extends Action {
    render() {
        const model = new CategoryModel();
        const {id} = this.getRequestData();

        if (id) {
            model.getBy("id", id).then(response => {
                if(response.type !== CategoryModel.RECIPE_TYPE) {
                    this.response.status(404).send(new MysqlError(MysqlError.WRONG_QUERY, {
                        message: 'Wrong category type.'
                    }));
                } else {
                    this.response.status(200).send(response);
                }
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

export default GetRecipeCategoryAction;
