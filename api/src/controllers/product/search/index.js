import Action from "../../../../core/Action";
import ProductModel from "../../../model/product";
import MysqlError from "../../../../core/MysqlError";

class SearchProductAction extends Action {
    render() {
        const model = new ProductModel();

        this.getId().then(id => model.search(id)).then(response => {
            this.response.status(200).send(response);
        }).catch(error => {
            this.response.status(404).send(new MysqlError(MysqlError.CANNOT_FIND_OBJECT, error));
        });
    }
}

export default SearchProductAction;
