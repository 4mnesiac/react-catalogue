import React from 'react';

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
              {/* TODO рефактор */}
              <div className={type === 'simple' ? 'catalog-item_simple' : "catalog-item_configurable"}>
                <fieldset>
                  <label htmlFor="color1">
                    <span
                      style={{
                        backgroundColor: "red",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    ></span>
                  </label>
                  <input name="color" type="radio" id="color1" />
                  <label htmlFor="color2">
                    <span
                      style={{
                        backgroundColor: "green",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    ></span>
                  </label>
                  <input name="color" type="radio" id="color2" />
                  <label htmlFor="color3">
                    <span
                      style={{
                        backgroundColor: "orange",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    ></span>
                  </label>
                  <input name="color" type="radio" id="color3" />
                </fieldset>
                <fieldset>
                  <label htmlFor="size1">
                    <span
                      style={{
                        textAlign: "center",
                        lineHeight: "1",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      S
                    </span>
                  </label>
                  <input type="radio" name="size" id="size1" />
                  <label htmlFor="size2">
                    <span
                      style={{
                        textAlign: "center",
                        lineHeight: "1",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      М
                    </span>
                  </label>
                  <input type="radio" name="size" id="size2" />
                  <label htmlFor="size3">
                    <span
                      style={{
                        textAlign: "center",
                        lineHeight: "1",
                        display: "block",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      L
                    </span>
                  </label>
                  <input type="radio" name="size" id="size3" />
                </fieldset>
              </div>
        </div>
    )
}
export default CardItem;