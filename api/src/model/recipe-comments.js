import Model from "../../core/Model";
import {toStringForQuery} from "../../core/helpers/mysqlDatabseHelpers";

const fields = [
    'content',
    'author_id',
    'created_at',
    'recipe_id'
];

class RecipeComments extends Model {
    constructor(data) {
        super("recipe_comments", data, fields);
    }

    getCreationData() {
        return {
            'content': toStringForQuery(this.data.name),
            'author_id': this.data.author_id,
            'created_at': this.data.created_at,
            'recipe_id': this.data.recipe_id
        };
    }
}


export default RecipeComments;
