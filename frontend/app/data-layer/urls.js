const baseUrl = 'http://localhost:8080';
const getUrl = postfix => `${baseUrl}/${postfix}`;

const urlsConfig = {
    recipeCategories: {
        add: getUrl('/recipe-category'),
        getAll: getUrl('/recipe-category'),
        getRecipes: id => getUrl(`/recipe-category/${id}/recipes`)
    },
    products: {
        getAll: getUrl('/product'),
        add: getUrl('/product'),
        search: string => getUrl(`/product/search/${string}`)
    }
};

export default urlsConfig;
