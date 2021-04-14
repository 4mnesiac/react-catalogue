import React from 'react';

function ConfigurableItem({type}) {
// TODO: доделать компонент
    return (
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
                </fieldset>
              </div>
    )
}
export default ConfigurableItem;