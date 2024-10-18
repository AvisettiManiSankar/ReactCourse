import Products from './Products';

function ProductList(props){
    return props.newProductsList.length === 0 ? (<h3>No Products Available!</h3>) : (<ul className="list-group shadow">
                {props.newProductsList.map((product)=>{
                    return <Products
                    key = {product?.pID}
                    id = {product?.pID}
                    name = {product?.pName}
                    description = {product?.desc}
                    isAvailable = {product?.isAvailable}
                    imageUrl = {product?.image}
                    price = {product?.price}
                    stock = {product?.stock}
                    ></Products>
                })}
            </ul>);
}

export default ProductList