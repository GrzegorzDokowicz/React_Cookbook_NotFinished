import React from 'react';
import {connect} from 'react-redux';

import Text from 'CoreComponents/text';

import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
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
            products: [],
        };
    }

    componentDidMount() {
        if (!this.props.categories || this.props.categories.length === 0) {
            this.props.dispatch(initCategoriesData());
        }
    }

    onChange(data) {
        this.setState(state => ({
            ...state,
            ...data
        }), () => {
            console.log(this.state);
        });
    }

    onSubmitProduct(product) {
        this.setState(state => ({
            ...state,
            products: [
                ...state.products,
                product
            ]
        }));
        console.log(product);
    }

    render() {
        return <div className="recipe-form">
            <TopImagePageContainer src={'/public/recipe-background.png'} imageType={'cover'}>
                <div className="recipe-form__header">
                    <Text type={'header'}>Dodawanie przepisu</Text>
                </div>
                <div className="recipe-form__general-data">
                    <RecipeGeneralDataForm categories={this.props.categories} onChange={this.onChange.bind(this)}/>
                </div>
            </TopImagePageContainer>
            <ResponsiveAppContainer>
                <div className="recipe-form__products">
                    <div className={'recipe-form__products-form'}>
                        <RecipeProductsForm onSubmit={this.onSubmitProduct.bind(this)}/>
                    </div>
                    <div className="recipe-form__products-list">
                        <RecipeProducts data={this.state.products}/>
                    </div>
                </div>
            </ResponsiveAppContainer>
            <ResponsiveAppContainer>
                <div className="recipe-form__steps">
                    <div className="recipe-form__steps-form">
                        <RecipeStepsForm onChange={steps => this.onChange({steps})}/>
                    </div>
                    <div className="recipe-form__steps-list">
                        <RecipeSteps steps={this.state.steps}/>
                    </div>
                </div>
            </ResponsiveAppContainer>
        </div>;

    }
}

const RecipeFormComponent = connect(mapStateToProps)(RecipeForm);

export default RecipeFormComponent;
