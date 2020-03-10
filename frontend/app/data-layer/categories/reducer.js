const initialState = [
    {
        id: 1,
        name: 'Meksykanskie',
        recipes: [
            {
                id: 1,
                title: 'Test',
                time: 35,
                kcal: 0,
                image: 'test.jpg'
            },
            {
                id: 2,
                title: 'Test',
                time: 0,
                kcal: 20,
                image: 'test.jpg'
            },
            {
                id: 3,
                title: 'Test',
                time: 10,
                kcal: 0,
                image: 'test.jpg'
            },
            {
                id: 4,
                title: 'Test',
                time: 10,
                kcal: 0,
                image: 'test.jpg'
            }
        ]
    },
    {
        id: 2,
        name: 'Wloskie',
        recipes: [
            {
                id: 1,
                title: 'Test',
                time: 0,
                kcal: 0
            },
            {
                id: 2,
                title: 'Test',
                time: 0,
                kcal: 0
            },
            {
                id: 3,
                title: 'Test',
                time: 0,
                kcal: 0
            },
            {
                id: 4,
                title: 'Test',
                time: 0,
                kcal: 0
            }
        ]
    },
    {
        id: 3,
        name: 'Azjatyckie',
        recipes: []
    },
    {
        id: 4,
        name: 'Polskie',
        recipes: []
    },
];

const categoriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
};

export default categoriesReducer;
