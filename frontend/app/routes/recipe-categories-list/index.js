import React from 'react';
import {connect} from "react-redux";
import './style.scss';

import CategoryThumbnail from "../../components/category-thumbnail";
import {Link} from 'react-router-dom';
import RecipeCategoryForm from "../../components/recipe-category-form";
import Modal from "../../../components/modal";
import {addRecipeCategory} from "../../data-layer/recipe-categories/actions";
import ActionBarPageContainer from "../../components/action-bar-page-container";
import Pagination from '../../../components/pagination';

const mapStateToProps = state => ({
    categories: state.categories
});


const CategoryListElement = ({id, name}) => <li className="recipe-categories-list__element">
    <Link to={`/recipe-category/${id}`}>
        <CategoryThumbnail title={name}/>
    </Link>
</li>;

class RecipeCategoriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            currentPage: 1
        };
    }

    setModalState(modalState) {
        this.setState(state => ({
            ...state,
            isOpen: modalState
        }))
    }

    addCategory() {
        this.setModalState(true);
    }

    addCategoryCallback(data) {
        this.props.dispatch(addRecipeCategory(data));
    }

    searchCategory($event) {
        console.log($event.currentTarget.value);
    }

    render() {
        return <ActionBarPageContainer title={"Kategorie przepisow"}
                                       onClick={this.addCategory.bind(this)}
                                       onSearch={this.searchCategory.bind(this)}>
            <div className="recipe-categories-list">
                <ul className="recipe-categories-list__elements">
                    {
                        (this.props.categories || []).map(cat => <CategoryListElement key={cat.id} {...cat}/>)
                    }
                </ul>
                <Pagination elements={this.props.categories.length}
                            callback={(page) => this.setState(state => ({
                                ...state,
                                currentPage: page
                            }))}
                            currentItem={this.state.currentPage}/>
            </div>
            <Modal isOpen={this.state.isOpen} onClose={() => this.setModalState(false)}>
                <div className="recipe-category__create-form">
                    <RecipeCategoryForm callback={this.addCategoryCallback.bind(this)}/>
                </div>
            </Modal>
        </ActionBarPageContainer>;
    }
}

const RecipeCategoriesListComponent = connect(mapStateToProps)(RecipeCategoriesList);

export default RecipeCategoriesListComponent;
