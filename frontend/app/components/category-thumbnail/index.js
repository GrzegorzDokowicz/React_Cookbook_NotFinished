import React from 'react';
import './style.scss';
import Text from "../text";

const CategoryThumbnail = ({title}) => {
    return <div className="category-thumbnail">
        <Text type={"title"}>
            {title}
        </Text>
    </div>;
};

export default CategoryThumbnail;
