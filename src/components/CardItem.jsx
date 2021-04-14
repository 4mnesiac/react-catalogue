import React from 'react';
import ConfigurableItem from './ConfigurableItem';

function CardItem({image, title, brand, price, currency, type}) {
    return (
        <div>
              <img
                className="catalog-item__image"
                src={image}
                alt={title}
              />
              <h2>{title}</h2>
              <p>Brand {brand}</p>
              <p>{currency === 'USD' ? '$' : ''} {price}</p>
              {/* TODO */}
              {/* <button>Купить</button> */}
              <ConfigurableItem type={type}/>
        </div>
    )
}
export default CardItem;