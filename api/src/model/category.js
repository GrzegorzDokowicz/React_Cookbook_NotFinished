import Model from "../../core/Model";
import {toStringForQuery} from "../../core/helpers/mysqlDatabseHelpers";

const fields = [
    'type',
    'name',
    'image'
];

class Category extends Model {
    static get RECIPE_TYPE (){
        return 'RECIPE_TYPE';
    }

    constructor(data) {
        super("category", data, fields);
    }

    getCreationData() {
        return {
            type: toStringForQuery(this.data.type),
            name: toStringForQuery(this.data.name),
            image: toStringForQuery(this.data.image)
        };
    }
}


export default Category;
