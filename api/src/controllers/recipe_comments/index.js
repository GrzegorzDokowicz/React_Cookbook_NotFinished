import ExtendedRouter from "../../../core/ExtendedRouter";
import CreateProductAction from "./create";
import GetProductAction from "./get";
import GetAllProductAction from "./get-all";

const recipeCommentsRouter = new ExtendedRouter();

recipeCommentsRouter.putAction('', CreateProductAction);
recipeCommentsRouter.getAction('/:id', GetProductAction);
recipeCommentsRouter.getAction('', GetAllProductAction);

export default recipeCommentsRouter.toFunction();
