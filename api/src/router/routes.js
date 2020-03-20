import healthCheckRouter from "../controllers/health-check";
import recipeCategoryRouter from "../controllers/recipe-category";
import productRouter from "../controllers/product";

const applicationRoutes = [
    {
        path: 'health',
        controller: healthCheckRouter
    },
    {
        path: 'recipe-category',
        controller: recipeCategoryRouter
    },
    {
        path: 'product',
        controller: productRouter
    }
];

export default applicationRoutes;
