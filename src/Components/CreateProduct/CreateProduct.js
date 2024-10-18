import { useState } from "react"
import ProductForm from "./ProductForm"

function CreateProduct(props){
    let[showForm, updateShowForm] = useState(false)
    function onCreateProduct(product){
        props.createProduct(product)
    }
    
    function onCreateNewProduct(){
        updateShowForm(true);
    }
    
    function onProductSubnittedOrCancelled(){
        updateShowForm(false);
    }

    return(
            <div style={{backgroundColor:'white', padding:'10px 20px', borderRadius:2}}>
                {!showForm && <button onClick={onCreateNewProduct}>Create Button</button>}
                {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubnittedOrCancelled}></ProductForm>}
            </div>
    )
}

export default CreateProduct