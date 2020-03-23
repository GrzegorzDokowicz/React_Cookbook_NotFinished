import Model from "../../core/Model";

const fields = [
    'category_id',
    'recipe_id',
];

const joins = [
    {
        'table': 'recipe',
        'field': 'recipe_id',
        'value': 'id',
        'fields': [
            'id',
            'title',
            'mainImage',
            'currentRating'
        ]
    },
    {
        'table': 'category',
        'field': 'category_id',
        'value': 'id',
        'fields': [
            'id',
            'name'
        ]
    }
];

/*const finalConfig = [
    {
        'field': 'recipe_id',
        'relation': {
            'table': 'recipe',
            'value': 'id',
            'type': [
                'number'
            ],
            'fields': [
                'id',
                'title',
                'mainImage',
                'currentRating'
            ]
        }
    },
    {
        'field': 'recipe_id',
        'type': [
            'number'
        ],
        'relation': {
            'table': 'category',
            'value': 'id',
            'fields': [
                'id',
                'name'
            ]
        }
    }
];*/

class RecipeCategories extends Model {
    constructor(data) {
        super("recipe_categories", data, fields,false, joins);
    }

    getCreationData() {
        return {
            'category_id': Number.parseInt(this.data.category_id.toString()),
            'recipe_id': Number.parseInt(this.data.recipe_id.toString())
        }
    }

    getBy(field, value) {
        return super.getBy(field, value, false);
    }
}


export default RecipeCategories;
