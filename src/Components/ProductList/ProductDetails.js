import React, { useState } from "react";
import Button from './Button'

function ProductDetails(props){
    console.log(props.stock)

    let [productCount, updateCount] = useState(0)

    function displayFormattedProductCount(){
        return productCount > 0 ? productCount : 'Zero';
    }

    let badgeClass = "badge-margin-left-240 badge ";
    badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

    let decrementProductCount = function(){
        updateCount(--productCount);
        console.log(productCount);
    }

    let incrementProductCount = function(){
        updateCount(++productCount);
        console.log(productCount);
    }

    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={ {marginRight: 30} }>${props.price}</h6>
            <Button clickEventHandler={decrementProductCount} disabled={productCount === 0}>-</Button>    {/* Here disabled is custom attribute */}
            <span style={ {padding: '0px 14px', fontSize:13} }>{displayFormattedProductCount()}</span>
            <Button clickEventHandler={incrementProductCount} disabled={productCount>=props.stock}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    )
}

export default ProductDetails