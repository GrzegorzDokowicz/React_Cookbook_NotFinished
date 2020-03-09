import ExtendedRouter from "../../../core/ExtendedRouter";
import CreateRecipeCategoryAction from "./create";
import GetRecipeCategoryAction from "./get";
import GetAllRecipeCategoryAction from "./get-all";

const recipeCategoryRouter = new ExtendedRouter();

recipeCategoryRouter.putAction('', CreateRecipeCategoryAction);
recipeCategoryRouter.getAction('/:id', GetRecipeCategoryAction);
recipeCategoryRouter.getAction('', GetAllRecipeCategoryAction);

export default recipeCategoryRouter.toFunction();
