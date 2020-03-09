import Action from "../../../../core/Action";
import ProductModel from "../../../model/product";
import MysqlError from "../../../../core/MysqlError";

class GetProductAction extends Action {
    render() {
        const model = new ProductModel();
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

export default GetProductAction;
