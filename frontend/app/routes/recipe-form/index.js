import React from 'react';
import {connect} from 'react-redux';

import Text from 'CoreComponents/text';

import RecipeGeneralDataForm from 'AppComponents/recipe/recipe-general-data-form';
import RecipeProducts from 'AppComponents/recipe/recipe-products';
import RecipeProductsForm from 'AppComponents/recipe/recipe-products-form';
import RecipeSteps from 'AppComponents/recipe/recipe-steps';
import RecipeStepsForm from 'AppComponents/recipe/recipe-steps-form';
import TopImagePageContainer from 'AppComponents/containers/top-image-page-container';

import {initCategoriesData} from 'AppDataLayer/recipe-categories/actions';

import './style.scss';

const mapStateToProps = state => ({
    categories: state.categories.elements
});

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            products: []
        };
    }

    componentDidMount() {
        if (!this.props.categories || this.props.categories.length === 0) {
            this.props.dispatch(initCategoriesData());
        }
    }

    setSteps(steps) {
        this.setState(state => ({
            ...state,
            steps: steps
        }));
    }

    render() {
        return <TopImagePageContainer src={'/public/recipe-background.png'} imageType={'cover'}>
            <div className="recipe-form">
                <Text type={'header'}>Dodawanie przepisu</Text>
                <div className="recipe-form__general-data">
                    <RecipeGeneralDataForm categories={this.props.categories}/>
                </div>
                <div className="recipe-form__products">
                    <div className="recipe-form__products-form">
                        <RecipeProductsForm/>
                    </div>
                    <div className="recipe-form__products-list">
                        <RecipeProducts data={this.state.products}/>
                    </div>
                </div>
                <div className="recipe-form__steps">
                    <div className="recipe-form__steps-form">
                        <RecipeStepsForm onChange={this.setSteps.bind(this)}/>
                    </div>
                    <div className="recipe-form__steps-list">
                        <RecipeSteps steps={this.state.steps}/>
                    </div>
                </div>
            </div>
        </TopImagePageContainer>;
    }
}

const RecipeFormComponent = connect(mapStateToProps)(RecipeForm);

export default RecipeFormComponent;
