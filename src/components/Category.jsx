import React from 'react';
import CardItem from './CardItem';
import store from '../redux/products.json';



function Category() {
    return (

            <ul className="catalog__container">
                {store.map((product) => (
                    // TODO рефактор
                    <li className="catalog-item" key={product.id}>
                        <CardItem
                        type={product.type}
                        title={product.title}
                        // image={product.image}
                        brand={product.brand}
                        price={product.regular_price.value}
                        currency={product.regular_price.currency}
                        ></CardItem>
                    </li>
                ))}
            </ul>

    )
}

export default Category;