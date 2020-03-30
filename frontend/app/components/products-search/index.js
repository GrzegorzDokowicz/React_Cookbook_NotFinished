import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './style.scss';
import Text from "../../../components/text";
import ProductDataRow from "../product-data-row";
import Select from "../../../components/select";
import {registerSearchProduct} from "../../data-layer/products/actions";
import AutoFillBase from "../../../components/auto-fill-base";

const mapStateToProps = (state) => ({
    currentResults: state.products.currentResults
});

const ProductSearchComponent = ({currentResults, dispatch}) => {
    const data = currentResults.map(({name}) => name);
    const [currentProduct, setProduct] = useState(false);
    const [type, setType] = useState("nazwa");

    return <div className="product-search">
        <div className="product-search__title">
            <Text type={"title"}>
                Twoja baza produktow
            </Text>
            <Text type={"description"}>
                Wyszukaj produktu wsrod listy produktow ktore dodales recznie
            </Text>
        </div>
        <div className="product-search__form">
            <Select title={"Kryterium wyszukoiwania"}
                    data={["kod", "nazwa"]}
                    value={type}
                    name={"critery"}
                    onChange={value => setType(value)} />
            <AutoFillBase data={data}
                          limit={3}
                          title={type === "nazwa" ? "Nazwa" : "Kod"}
                          onSearch={string => dispatch(registerSearchProduct(string))}
                          onSelect={name => setProduct(name)}/>
        </div>
        <div className="product-search__data">
            <ProductDataRow product={currentProduct}/>
        </div>
    </div>
};

const ProductSearch = connect(mapStateToProps)(ProductSearchComponent);

export default ProductSearch;
