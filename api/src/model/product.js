import Model from "../../core/Model";
import {toStringForQuery} from "../../core/helpers/mysqlDatabseHelpers";

const fields = [
    'name',
    'kcal',
    'carbo',
    'protein',
    'fat'
];

class Category extends Model {
    constructor(data) {
        super("product", data, fields);
    }

    getCreationData() {
        return {
            'name': toStringForQuery(this.data.name),
            'kcal': parseFloat(this.data.kcal),
            'carbo': parseFloat(this.data.carbo),
            'protein': parseFloat(this.data.protein),
            'fat': parseFloat(this.data.fat)
        };
    }
}


export default Category;
