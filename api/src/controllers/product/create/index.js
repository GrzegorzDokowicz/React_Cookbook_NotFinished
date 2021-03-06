import CreateAction from "../../../../core/actions/CreateAction";
import ProductModel from "../../../model/product";

class CreateProductAction extends CreateAction {
    getConfiguration() {
        return {
            model: ProductModel,
            data: {
                ...this.getRequestData()
            }
        }

    }
}

export default CreateProductAction;
