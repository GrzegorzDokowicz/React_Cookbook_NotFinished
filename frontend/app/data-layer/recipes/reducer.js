const initialState = [
    {
        id: 1,
        title: 'Pyra 123',
        image: 'https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2019-06/howcuttingdo.jpg',
        currentRating: 3,
        products: [
            {
                name: "test"
            },
            {
                name: "test"
            },
            {
                name: "test"
            },
        ]
    },
    {
        id: 2,
        title: 'Zupa',
        image: 'https://i.ytimg.com/vi/0SPwwpruGIA/maxresdefault.jpg',
        currentRating: 4,
        products: [
            {
                name: "test1"
            },
            {
                name: "test1"
            },
            {
                name: "test1"
            },
        ]
    }
];

const recipesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
};

export default recipesReducer;
