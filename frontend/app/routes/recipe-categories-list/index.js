import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Modal from 'CoreComponents/modal';

import CategoryThumbnail from 'AppComponents//page-elements/category-thumbnail';
import RecipeCategoryForm from 'AppComponents//recipe/recipe-category-form';
import ActionBarPageContainer from 'AppComponents/containers/action-bar-page-container';

import {initCategoriesData, registerRecipeCategory} from 'AppDataLayer/recipe-categories/actions';

import './style.scss';
import Loader from '../../components/page-elements/loader';
import AnimationContainer from '../../components/containers/animation-container';

const mapStateToProps = state => ({
    categories: state.categories.elements,
    isLoading: state.categories.isLoading
});

const CategoryListElement = ({id, name, image}) => <li className="recipe-categories-list__element">
    <Link to={`/recipe-category/${id}`}>
        <CategoryThumbnail title={name} image={image}/>
    </Link>
</li>;

class RecipeCategoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.listAnimationsTargets = React.createRef();

        this.state = {
            isOpen: false,
            currentPage: 1
        };
    }

    componentDidMount() {
        this.props.dispatch(initCategoriesData());
    }

    setModalState(modalState) {
        this.setState(state => ({
            ...state,
            isOpen: modalState
        }));
    }

    addCategory() {
        this.setModalState(true);
    }

    addCategoryCallback(data) {
        this.props.dispatch(registerRecipeCategory(data));
    }

    searchCategory($event) {
        console.log($event.currentTarget.value);
    }

    render() {
        return <ActionBarPageContainer
            title={'Kategorie przepisow'}
            onClick={this.addCategory.bind(this)}
            onSearch={this.searchCategory.bind(this)}>
            <div className="recipe-categories-list">
                <ul ref={this.listAnimationsTargets} className="recipe-categories-list__elements">
                    <Loader isLoading={this.props.isLoading}>
                        <AnimationContainer childrenSelector={'.recipe-categories-list__element'} targetRef={this.listAnimationsTargets} list={(this.props.categories || []).map(cat => <CategoryListElement key={cat.id} {...cat}/>)}/>
                    </Loader>
                </ul>
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
