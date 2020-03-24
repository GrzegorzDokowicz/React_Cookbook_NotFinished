import ExtendedRouter from "../../../core/ExtendedRouter";
import CreateRecipeCategoryAction from "./create";
import GetRecipeCategoryAction from "./get";
import GetAllRecipeCategoryAction from "./get-all";
import GetRecipesFromCategoryAction from "./get-recipes";

const recipeCategoryRouter = new ExtendedRouter();

recipeCategoryRouter.putAction('', CreateRecipeCategoryAction);
recipeCategoryRouter.getAction('/:id', GetRecipeCategoryAction);
recipeCategoryRouter.getAction('/:id/recipes', GetRecipesFromCategoryAction);
recipeCategoryRouter.getAction('', GetAllRecipeCategoryAction);

export default recipeCategoryRouter.toFunction();
