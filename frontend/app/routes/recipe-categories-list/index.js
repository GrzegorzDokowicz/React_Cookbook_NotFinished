import React from 'react';
import {connect} from "react-redux";
import './style.scss';

import CategoryThumbnail from "../../components/category-thumbnail";
import Text from "../../../components/text";
import {Link} from 'react-router-dom';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import ActionBar from "../../components/action-bar";

const mapStateToProps = state => ({
    categories: state.categories
});


const CategoryListElement = ({id, name}) => <li className="recipe-categories-list__element">
    <Link to={`/recipe-category/${id}`}>
        <CategoryThumbnail title={name}/>
    </Link>
</li>;

class RecipeCategoriesList extends React.Component {
    addCategory() {
        console.log("add category");
    }

    searchCategory($event) {
        console.log($event.currentTarget.value);
    }

    render() {
        return <ResponsiveAppContainer>
            <div className="recipe-categories-list">
                <div className={"recipe-categories-list__header"}>
                    <Text type={"header"}>
                        Kategorie przepisow
                    </Text>
                </div>
                <div className="recipe-categories-list__action-bar">
                    <ActionBar onSearch={this.searchCategory.bind(this)} onClick={this.addCategory.bind(this)}/>
                </div>
                <ul className="recipe-categories-list__elements">
                    {
                        (this.props.categories || []).map(cat => <CategoryListElement key={cat.id} {...cat}/>)
                    }
                </ul>
            </div>
        </ResponsiveAppContainer>
    }
}

const RecipeCategoriesListComponent = connect(mapStateToProps)(RecipeCategoriesList);

export default RecipeCategoriesListComponent;
