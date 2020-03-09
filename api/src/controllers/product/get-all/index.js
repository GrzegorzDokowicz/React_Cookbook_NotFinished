import Action from "../../../../core/Action";
import ProductModel from "../../../model/product";
import MysqlError from "../../../../core/MysqlError";

class GetAllProductAction extends Action {
    render() {
        const model = new ProductModel();

        model.getAll().then(response => {
            this.response.status(200).send(response);
        }).catch(error => {
            this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, error));
        });
    }
}

export default GetAllProductAction;
