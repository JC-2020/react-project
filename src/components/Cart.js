import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import greyTshirt from '../images/greytshirt.jpg';
import blackTshirt from '../images/blacktshirt.jpg';
import blueTshirt from '../images/bluetshirt.jpg';
import redTshirt from '../images/redtshirt.jpg';

function Cart({ basketProps, productQuantity, clearProduct }) {
    console.log(basketProps);

    //const [productsInCart, setProductsInCart] = useState([]);
    const productsInCart=[]

    Object.keys(basketProps.products).forEach(function (item) {

        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

    //const productImages = [greyTshirt, blackTshirt, blueTshirt, redTshirt];
    const productImages = (product) => {
        if (product.tagName === 'greyTshirt') {
            return greyTshirt;
        } else if (product.tagName === 'blackTshirt') {
            return blackTshirt;
        } else if (product.tagName === 'blueTshirt') {
            return blueTshirt;
        } else if (product.tagName === 'redTshirt') {
            return redTshirt;
        }
    }

//const clearProducts = () => {
  //  return
//}

//const productQuantity = () => {

//}


return productsInCart.map((product, index) => {
  // console.log("My product is");
    //console.log(product);

    return (
        <>
        <Fragment key={index}>
            <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} alt="" />
                <span className="sm-hide">{product.name}</span>
            </div>
            <div className="price sm-hide">${product.price}.00</div>
            <div className="quantity">
                <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                <span>{product.numbers}</span>
                <ion-icon onClick={() => productQuantity('increase', product.tagName)}className="increase" name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div className="total">${product.numbers * product.price}.00</div>
        </Fragment>
     </>
    )
    })
}

const mapStateToProps = state => {
    return { basketProps: state.basketState }
};

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);      