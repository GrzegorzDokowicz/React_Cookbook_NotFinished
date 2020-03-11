import React, {useState} from 'react';
import Modal from "../../../components/modal";
import ProductForm from "../product-form";
import ActionBar from "../action-bar";
import Text from "../../../components/text";

const RecipeProducts = () => {
    const [isOpen, setOpen] = useState(false);

    return <div className="recipe-products">
        <Text type={"subheader"}>Produkty </Text>
        <ActionBar onClick={() => setOpen(true)}/>
        <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
            <ProductForm/>
        </Modal>
    </div>
};

export default RecipeProducts;
