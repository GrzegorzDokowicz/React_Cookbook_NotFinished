const baseUrl = 'http://localhost:8080';
const getUrl = postfix => `${baseUrl}/${postfix}`;

const urlsConfig = {
    recipeCategories: {
        add: getUrl('/recipe-category'),
        getAll: getUrl('/recipe-category'),
        getRecipes: id => getUrl(`/recipe-category/${id}/recipes`)
    }
};

export default urlsConfig
