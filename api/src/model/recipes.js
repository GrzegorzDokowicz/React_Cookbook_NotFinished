import Model from "../../core/Model";
import {toStringForQuery} from "../../core/helpers/mysqlDatabseHelpers";

const fields = [
    `title`,
    `mainImage`,
    `currentRating`,
    `author_id`
];

class Recipe extends Model {
    constructor(data) {
        super("recipe", data, fields);
    }

    getCreationData() {
        return {
            title: toStringForQuery(this.data.title),
            currentRating: toStringForQuery(this.data.currentRating),
            mainImage: toStringForQuery(this.data.mainImage),
            author_id: Number.parseInt(this.data.author_id.toString())
        };
    }
}


export default Recipe;

