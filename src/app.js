import { useState } from 'react';
import './app.css'
import CreateProduct from './Components/CreateProduct/CreateProduct';
import ProductList from './Components/ProductList/ProductList';
import FilterProduct from './Components/FilterProduct/FilterProduct';

const products = [
    {
        pID: 1, 
        pName: 'Fresh Milk', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'assets/images/fresh-milk.png',
        price: 12,
        stock:5
    },
    {
        pID: 2, 
        pName: 'Cottage Cheese', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "assets/images/cottage-cheese.png",
        price: 10,
        stock:3
    },
    {
        pID: 3, 
        pName: 'Brocoli', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "assets/images/brocoli.png",
        price: 15,
        stock:5
    },
    {
        pID: 4, 
        pName: 'oranges', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "assets/images/oranges.png",
        price: 20,
        stock:8
    },
    {
        pID: 5, 
        pName: 'Olive oil', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "assets/images/olive-oil.png",
        price: 14,
        stock:1
    }
]

function App(){
    let [newProductsList, updateProducts] = useState(products)
    let [filterTextvalue, updateFilterText] = useState('all')

    let filteredProductList = newProductsList.filter((product)=>{
        if(filterTextvalue === 'available'){
            return product.isAvailable === true;
        }else if(filterTextvalue === 'unavailable'){
            return product.isAvailable === false;
        }else{
            return product
        }
    })

    function createProduct(product){
        product.pID = newProductsList.length + 1;
        updateProducts([product,...newProductsList]);
    }

    function onFilterValueSelected(filterValue){
        updateFilterText(filterValue);
    }
    
    return(<div className='row'>
            <div className='col-lg-8 mx-auto'>
                <CreateProduct createProduct={createProduct}></CreateProduct>
                <FilterProduct onFilterValueSelected={onFilterValueSelected}></FilterProduct>
                <ProductList newProductsList={filteredProductList}></ProductList>
            </div>
        </div>
    )
}

export default App;