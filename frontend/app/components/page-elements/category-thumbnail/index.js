import React from 'react';

import Text from 'CoreComponents/text';

import './style.scss';

const CategoryThumbnail = ({title, image}) => {
    return <div className="category-thumbnail" style={{
        backgroundImage: `url(${image})`
    }}>
        <div className="category-thumbnail__layer">
            <div className="category-thumbnail__text">
                <Text type={'title'} color={'secondary'}>
                    {title}
                </Text>
            </div>
        </div>
    </div>;
};

export default CategoryThumbnail;
