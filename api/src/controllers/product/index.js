import ExtendedRouter from "../../../core/ExtendedRouter";
import CreateProductAction from "./create";
import GetProductAction from "./get";
import GetAllProductAction from "./get-all";

const productRouter = new ExtendedRouter();

productRouter.putAction('', CreateProductAction);
productRouter.getAction('/:id', GetProductAction);
productRouter.getAction('', GetAllProductAction);

export default productRouter.toFunction();
